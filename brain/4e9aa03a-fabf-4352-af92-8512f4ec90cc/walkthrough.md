# Supabase Admin Tool & Debugging Guide

I have created a tool to help you create users and debug the "Database error" you are seeing.

## 1. Setup

The tool is located at:
`d:\sorabatchcreatevideo-1.1.0-setup\$PLUGINSDIR\admin_tool\`

1.  Open the file `d:\sorabatchcreatevideo-1.1.0-setup\$PLUGINSDIR\admin_tool\.env` in a text editor.
2.  Fill in your Supabase details:
    ```env
    SUPABASE_URL=https://your-project.supabase.co
    SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    ```
    > **Note:** usage of `service_role` key is required to bypass Row Level Security (RLS) and manage users. Find it in Supabase Dashboard -> Project Settings -> API.

## 2. Usage

Open a terminal (cmd or PowerShell) in the `admin_tool` directory and run:

### Create a User
```bash
node supabase_admin_tool.js create --email "newuser@example.com" --password "password123" --role "admin" --key "some-key"
```

### List Users
```bash
node supabase_admin_tool.js list
```

## 3. Debugging "Database error creating new user"

If the tool also fails with "Database error", it confirms the issue is within your Postgres Database, likely a **Trigger**.

1.  Go to Supabase Dashboard.
2.  Click **Database** (icon on the left) -> **Triggers**.
3.  Look for any trigger on the `auth.users` table (e.g., `on_auth_user_created`).
4.  Disable it temporarily or check its code for errors (e.g., trying to insert into a table that violates constraints).
