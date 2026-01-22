'use strict'; var __awaiter = this && this['__awaiter'] || function (_0x4f3e3f, _0x8a4cb6, _0x25d7ae, _0x24903e) { function _0x5e4b53(_0x27a5e3) { return _0x27a5e3 instanceof _0x25d7ae ? _0x27a5e3 : new _0x25d7ae(function (_0x167f44) { _0x167f44(_0x27a5e3); }); } return new (_0x25d7ae || (_0x25d7ae = Promise))(function (_0x2ae434, _0x17e4bf) { function _0x1a4c49(_0x1d2573) { try { _0xd76bce(_0x24903e['next'](_0x1d2573)); } catch (_0x298734) { _0x17e4bf(_0x298734); } } function _0x2eac3c(_0x56a2e7) { try { _0xd76bce(_0x24903e['throw'](_0x56a2e7)); } catch (_0x2e2640) { _0x17e4bf(_0x2e2640); } } function _0xd76bce(_0x462b8e) { _0x462b8e['done'] ? _0x2ae434(_0x462b8e['value']) : _0x5e4b53(_0x462b8e['value'])['then'](_0x1a4c49, _0x2eac3c); } _0xd76bce((_0x24903e = _0x24903e['apply'](_0x4f3e3f, _0x8a4cb6 || []))['next']()); }); }; Object['defineProperty'](exports, '__esModule', { 'value': !![] }); const electron_1 = require('electron'); const fs = require('fs'); const path = require('path'); require('@electron/remote/main')['initialize'](); const proxyChain = require('proxy-chain'); const request = require('request'); let win = null; const args = process['argv']['slice'](0x1); const serve = args['some'](_0x36e59f => _0x36e59f === '--serve'); const devEnvironment = ![]; const productMode = !![]; let userAgentMacos = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'; let userAgentWindows = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'; let version = '21.13'; let crmURL = 'https://crm.alosoft.vn'; let serverFolderProduct = 'simple_tikdown_v2_27_09_2023'; let serverFolderDev = 'simple_tikdown_v2_dev';

// ========== FAKE LICENSE DATA ==========
const FAKE_LICENSE = {
    success: true,
    data: {
        key: 'ATP-TIKTOK-VIP',
        license_key: 'ATP-TIKTOK-VIP',
        tier: 'VIP',
        plan: 'VIP',
        remaining_days: 365,
        remainingDays: 365,
        expire_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        isValid: true,
        valid: true,
        threads: 999,
        max_threads: 999
    },
    message: 'License valid',
    remaining_days: 365
};

// ========== CLIENT-SIDE BYPASS SCRIPT ==========
const LICENSE_BYPASS_SCRIPT = `
(function() {
    console.log('[BYPASS] License bypass v2 loaded');
    
    // Override title
    setInterval(() => {
        if (document.title.includes('còn -') || document.title.includes('còn -')) {
            document.title = document.title.replace(/còn\\s*-?\\d+\\/\\d+\\s*ngày/gi, 'còn 365/365 ngày');
        }
        // Patch any element with license text
        document.querySelectorAll('*').forEach(el => {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                const text = el.textContent;
                if (text && text.includes('còn') && text.includes('ngày') && text.includes('-')) {
                    el.textContent = text.replace(/còn\\s*-?\\d+\\/\\d+\\s*ngày/gi, 'còn 365/365 ngày');
                }
            }
        });
    }, 1000);
    
    console.log('[BYPASS] VIP 365 days active');
})();
`;

function getUserAgent() { if (process['platform'] === 'darwin') { return userAgentMacos; } else { return userAgentWindows; } }

function createWindow() {
    try {
        electron_1['app']['commandLine']['appendSwitch']('auto-detect', 'false');
        electron_1['app']['commandLine']['appendSwitch']('no-proxy-server');
        electron_1['app']['commandLine']['appendSwitch']('ignore-certificate-errors');
        electron_1['app']['commandLine']['appendSwitch']('no-sandbox');
    } catch (e) { }

    const size = electron_1['screen']['getPrimaryDisplay']()['workAreaSize'];
    win = new electron_1['BrowserWindow']({
        'x': 0, 'y': 0, 'width': size['width'], 'height': size['height'],
        'webPreferences': {
            'plugins': true, 'nodeIntegration': true, 'contextIsolation': false,
            'backgroundThrottling': false, 'webSecurity': false, 'nodeIntegrationInWorker': true,
            'allowRunningInsecureContent': serve, 'webviewTag': true
        }
    });

    // ========== INTERCEPT LICENSE REQUESTS AT ELECTRON LEVEL ==========
    const session = win.webContents.session;

    // Intercept and modify responses for license-related requests
    session.webRequest.onBeforeRequest({ urls: ['*://*/*'] }, (details, callback) => {
        const url = details.url.toLowerCase();

        // Check if this is a license-related request
        if (url.includes('license') || url.includes('check_key') || url.includes('verify_key') ||
            url.includes('check-key') || url.includes('get_key') || url.includes('validate')) {
            console.log('[BYPASS] Intercepted license request:', details.url);
            // Don't block, let it through but we'll modify the response
        }

        callback({ cancel: false });
    });

    // Modify response headers
    session.webRequest.onHeadersReceived({ urls: ['*://*/*'] }, (details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Access-Control-Allow-Origin': ['*']
            }
        });
    });
    // ========== END INTERCEPTION ==========

    win['webContents']['clearHistory']();
    win['webContents']['session']['clearCache']();
    require('@electron/remote/main')['enable'](win['webContents']);
    win['productMode'] = productMode;

    // Inject bypass script on every page load
    win.webContents.on('did-finish-load', () => {
        console.log('[BYPASS] Injecting client-side bypass...');
        win.webContents.executeJavaScript(LICENSE_BYPASS_SCRIPT).catch(e => { });
    });
    win.webContents.on('dom-ready', () => {
        win.webContents.executeJavaScript(LICENSE_BYPASS_SCRIPT).catch(e => { });
    });

    if (serve) {
        require('electron-debug')();
        require('electron-reloader')(module);
        win['loadURL']('http://localhost:4200');
    } else {
        win['appPath'] = process['resourcesPath'];
        win['version'] = version;
        if (devEnvironment) {
            win['loadURL'](crmURL + '/' + serverFolderDev + '/index.html');
        } else if (productMode) {
            win['loadURL'](crmURL + '/' + serverFolderProduct + '/index.html');
        }
    }

    win['webContents']['setUserAgent'](getUserAgent());
    win['on']('closed', () => { win = null; });

    const menu = electron_1['Menu']['buildFromTemplate']([
        { 'label': 'Cut', 'role': 'cut', 'accelerator': 'CmdOrCtrl+X' },
        { 'label': 'Copy', 'role': 'copy', 'accelerator': 'CmdOrCtrl+C' },
        { 'label': 'Paste', 'role': 'paste', 'accelerator': 'CmdOrCtrl+V' }
    ]);
    win['webContents']['on']('context-menu', (e, p) => { menu['popup']({ 'window': win, 'x': p['x'], 'y': p['y'] }); });
    win['webContents']['on']('before-input-event', (e, i) => {
        if (i['shift'] && i['control'] && i['key']['toLowerCase']() === 'm') { win['webContents']['openDevTools'](); }
        if (i['shift'] && i['control'] && i['key']['toLowerCase']() === 'p') { electron_1['shell']['openExternal']('file://' + electron_1['app']['getPath']('userData')); }
    });
    return win;
}

try {
    electron_1['app']['whenReady']()['then'](createWindow);
    electron_1['app']['on']('window-all-closed', () => { if (process['platform'] !== 'darwin') { electron_1['app']['quit'](); } });
    electron_1['app']['on']('activate', () => { if (win === null) { createWindow(); } });
} catch (e) { }

function getError(e) { if (typeof e === 'string') { return e; } if (e && e['message']) { return e['message']; } return ''; }

// ========== INTERCEPT IPC LICENSE REQUESTS ==========
const originalIpcOn = electron_1['ipcMain']['on'].bind(electron_1['ipcMain']);
electron_1['ipcMain']['on'] = function (channel, listener) {
    if (channel === 'getRequest' || channel === 'postRequest' || channel === 'sendRequest') {
        return originalIpcOn(channel, (event, data) => {
            const url = data.url || (data.options && data.options.url) || '';

            // Check if license-related request
            if (url.toLowerCase().includes('license') || url.toLowerCase().includes('check') ||
                url.toLowerCase().includes('key') || url.toLowerCase().includes('verify')) {
                console.log('[BYPASS] Intercepted IPC license request:', url);

                // Send fake successful response
                const keyRender = data.keyRender || '';
                const keySuccess = data.keyResponseSuccess || ('getRequestResponseSuccess' + keyRender);

                setTimeout(() => {
                    event.sender.send(keySuccess, {
                        statusCode: 200,
                        data: JSON.stringify(FAKE_LICENSE)
                    });
                }, 100);
                return;
            }

            // Otherwise, call original listener
            return listener(event, data);
        });
    }
    return originalIpcOn(channel, listener);
};

function electronSendRequest({ url, method, headers, proxy, dataPost }) {
    // Check if license request
    if (url && (url.toLowerCase().includes('license') || url.toLowerCase().includes('check') ||
        url.toLowerCase().includes('key') || url.toLowerCase().includes('verify'))) {
        console.log('[BYPASS] Bypassing electronSendRequest:', url);
        return Promise.resolve({
            statusCode: 200,
            data: JSON.stringify(FAKE_LICENSE),
            redirectURL: url
        });
    }

    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let redirectURL = url;
            let opts = { 'url': url, 'redirect': 'manual', 'method': method };
            if (proxy) {
                const sess = electron_1['session']['fromPartition']('custom-session');
                const anonProxy = yield proxyChain['anonymizeProxy'](proxy);
                sess['setProxy']({ 'proxyRules': anonProxy });
                opts['session'] = sess;
            }
            const req = electron_1['net']['request'](opts);
            Object['keys'](headers)['forEach'](k => { req['setHeader'](k, headers[k]); });
            let timeout = setTimeout(() => { reject(new Error('RequestTimeout')); cleanup(); }, 60000);
            const cleanup = () => { clearTimeout(timeout); req['removeAllListeners'](); };
            req['on']('error', e => { reject(new Error(getError(e))); cleanup(); });
            req['on']('response', res => {
                let data = '';
                res['on']('data', chunk => { data += chunk; });
                res['on']('end', () => {
                    cleanup();
                    try {
                        const r = JSON['parse'](JSON['stringify'](res));
                        r['data'] = data; r['redirectURL'] = redirectURL;
                        resolve(r);
                    } catch (e) { reject(new Error(getError(e))); }
                });
            });
            req['on']('redirect', (s, m, u) => { redirectURL = u; req['followRedirect'](); });
            if (method === 'POST' && dataPost) { req['write'](dataPost); }
            req['end']();
        } catch (e) { reject(e); }
    }));
}

electron_1['ipcMain']['on']('getRequest', (e, d) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, headers, proxy, keyRender } = d;
    try {
        let r = yield electronSendRequest({ 'url': url, 'headers': headers, 'method': 'GET', 'proxy': proxy });
        e['sender']['send']('getRequestResponseSuccess' + keyRender, r);
    } catch (err) { e['sender']['send']('getRequestResponseError' + keyRender, getError(err)); }
}));

electron_1['ipcMain']['on']('postRequest', (e, d) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, headers, dataPost, proxy, keyRender } = d;
    try {
        let r = yield electronSendRequest({ 'url': url, 'headers': headers, 'method': 'POST', 'proxy': proxy, 'dataPost': dataPost });
        e['sender']['send']('postRequestResponseSuccess' + keyRender, r);
    } catch (err) { e['sender']['send']('postRequestResponseError' + keyRender, getError(err)); }
}));

electron_1['ipcMain']['on']('downloadFile', (e, d) => __awaiter(void 0, void 0, void 0, function* () {
    let { url, headers, savePath, idRender } = d;
    let key = 'statusDownloadFile' + idRender;
    let interval;
    const fail = msg => { if (interval) { clearInterval(interval); } removeFile(savePath); e['sender']['send'](key, { 'status': 'failure', 'message': msg }); };
    try {
        let dir = path['dirname'](savePath);
        if (!fs['existsSync'](dir)) { fail('Folder not found'); return; }
        const req = electron_1['net']['request'](url);
        let timedOut = false, elapsed = 0;
        interval = setInterval(() => { elapsed += 1000; if (elapsed >= 60000) { timedOut = true; req['removeAllListeners'](); fail('RequestTimeout'); } }, 1000);
        Object['keys'](headers)['forEach'](k => { req['setHeader'](k, headers[k]); });
        const ws = fs['createWriteStream'](savePath);
        let total, loaded = 0, pct = 0;
        req['on']('error', err => { ws['close'](); fail(getError(err)); });
        req['on']('response', res => {
            try { total = parseInt(res['headers']['content-length'], 10); } catch (x) { }
            res['on']('data', chunk => {
                if (total && total > 1) { loaded += chunk['length']; const p = Math['floor'](loaded / total * 100); if (p > pct) { pct = p; e['sender']['send'](key, { 'status': 'loading', 'progressPercentage': p }); } }
                if (timedOut) { req['removeAllListeners'](); }
                elapsed = 0; ws['write'](chunk);
            });
            res['on']('end', () => { clearInterval(interval); ws['end'](() => { ws['close'](); }); e['sender']['send'](key, { 'status': 'success', 'path': savePath }); });
        });
        req['end']();
    } catch (err) { fail(getError(err)); }
}));

electron_1['ipcMain']['on']('checkLinkDownload', (e, d) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, headers, keyRender } = d;
    request['head'](url, (err, res) => {
        if (err) { e['sender']['send']('checkLinkDownloadError' + keyRender, getError(err)); }
        else {
            if (res['statusCode'] === 200) { e['sender']['send']('checkLinkDownloadSuccess' + keyRender); }
            else { e['sender']['send']('checkLinkDownloadError' + keyRender, '{"statusCode":' + res['statusCode'] + '}'); }
        }
    });
}));

electron_1['ipcMain']['on']('getStreamFile', (e, d) => __awaiter(void 0, void 0, void 0, function* () {
    const { keyRender, filePath } = d;
    try {
        fs['stat'](filePath, (err, stats) => {
            e['sender']['send']('getStreamFileResponseSuccess' + keyRender, err ? err['message'] : stats);
        });
    } catch (err) { e['sender']['send']('getStreamFileResponseSuccess' + keyRender, getError(err)); }
}));

function sendRequest(opts) {
    // Check if license request
    const url = opts.url || '';
    if (url.toLowerCase().includes('license') || url.toLowerCase().includes('check') ||
        url.toLowerCase().includes('key') || url.toLowerCase().includes('verify')) {
        console.log('[BYPASS] Bypassing sendRequest:', url);
        return Promise.resolve({
            statusCode: 200,
            data: JSON.stringify(FAKE_LICENSE)
        });
    }

    if (!opts['timeout']) { opts['timeout'] = 30000; }
    return new Promise((resolve, reject) => {
        request(opts, (err, res, body) => {
            if (err) { reject(err); }
            else { let r = JSON['parse'](JSON['stringify'](res)); r['data'] = body; resolve(r); }
        });
    });
}

electron_1['ipcMain']['on']('sendRequest', (e, d) => __awaiter(void 0, void 0, void 0, function* () {
    const { keyResponseSuccess, keyResponseError, options } = d;
    try { let r = yield sendRequest(options); e['sender']['send'](keyResponseSuccess, r); }
    catch (err) { e['sender']['send'](keyResponseError, getError(err)); }
}));

electron_1['ipcMain']['on']('uploadBinary', (e, d) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, headers, filePath, keyRender, proxy } = d;
    try {
        let opts = { 'method': 'POST', 'url': url, 'headers': headers, 'body': fs['createReadStream'](filePath) };
        if (proxy) { opts['proxy'] = proxy; }
        let r = yield sendRequest(opts);
        e['sender']['send']('uploadBinaryResponseSuccess' + keyRender, r);
    } catch (err) { e['sender']['send']('uploadBinaryResponseError' + keyRender, getError(err)); }
}));

function removeFile(p) { if (fs['existsSync'](p)) { fs['unlinkSync'](p); } }
process['on']('uncaughtException', e => { console['log']('Main process error', e); });
