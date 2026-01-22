param(
    [string]$Path,
    [int]$MinLength = 5
)

if (-not (Test-Path $Path)) {
    Write-Host "File not found: $Path"
    exit
}

$bytes = [System.IO.File]::ReadAllBytes($Path)
$stringBuilder = [System.Text.StringBuilder]::new()
$results = @()

foreach ($byte in $bytes) {
    if (($byte -ge 32 -and $byte -le 126) -or $byte -eq 9) { # Printable ASCII + Tab
        [void]$stringBuilder.Append([char]$byte)
    } else {
        if ($stringBuilder.Length -ge $MinLength) {
            $str = $stringBuilder.ToString()
            # Filter for interesting things: URLs, Paths, Keywords
            if ($str -match "https?://|cmd\.exe|powershell|webhook|discord|telegram|api\.|token|password|login") {
                $results += $str
            }
        }
        [void]$stringBuilder.Clear()
    }
}

if ($stringBuilder.Length -ge $MinLength) {
    $str = $stringBuilder.ToString()
    if ($str -match "https?://|cmd\.exe|powershell|webhook|discord|telegram|api\.|token|password|login") {
        $results += $str
    }
}

$results | Select-Object -Unique
