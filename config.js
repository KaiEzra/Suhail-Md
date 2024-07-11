const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_19_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI3LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1ROaG40SlBqd0x0WStwc3NUVUZEREo4c2hQbWpYNTZ0SythMFBjN3JjND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSElVYndOVUVSejZiaTlURmdET1NpUVwiLFxuICBcInBob25lSWRcIjogXCIxZmEzY2Y1NC1mMzQxLTRlMWQtOWU4NC04MWQ0YjVlZjAzOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTgwLFxuICAgICAgMjA0LFxuICAgICAgMTc5LFxuICAgICAgNzMsXG4gICAgICAyMDQsXG4gICAgICAzNixcbiAgICAgIDE4MSxcbiAgICAgIDEyNSxcbiAgICAgIDEzLFxuICAgICAgMTQ3LFxuICAgICAgMzcsXG4gICAgICA4NyxcbiAgICAgIDIzLFxuICAgICAgMTAxLFxuICAgICAgNTUsXG4gICAgICAwLFxuICAgICAgMTY1LFxuICAgICAgMTY4LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMixcbiAgICAgIDIzLFxuICAgICAgMTU2LFxuICAgICAgMTM0LFxuICAgICAgMTg3LFxuICAgICAgMTc2LFxuICAgICAgMTAzLFxuICAgICAgMTE1LFxuICAgICAgMTEsXG4gICAgICAyNTUsXG4gICAgICA5NixcbiAgICAgIDMzLFxuICAgICAgOTgsXG4gICAgICA0MixcbiAgICAgIDIxMCxcbiAgICAgIDI0NyxcbiAgICAgIDEyNyxcbiAgICAgIDE4OCxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRNkc2OTlUSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1MDc1NTkwNjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY5ODE0MzA4MzExMjY1OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01ERThaQU5FS25nd0xRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0hkQlI1MkFBakxiUG13SDhvRTJrMEJ0Y3FMWW1jS29zMGFjdm1uSXlYcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzbGhrRUM1UURoSFRXbVpyVTlBNFNBU2RkdkRhRGsycG9TdEdvMURFK0FRQmtSU01ubllQdkJmQXNGZ00vSE1ObXF3elFxM1FHbTJEQU1TNkNjckxCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwd0xiK0dPOWVTajd5eTlLZEU3aGc1SG5WL21rK05MZWZLa3lYLzdUbkQydzZISjZnOTFzckt1VnpjVjRpVU1kcHhDN3YrWGMwTUlNaWNYZ21kQTNDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDUwNzU1OTA2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MjU1NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNSG9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1Iby5qc29uIjogIntcImtleURhdGFcIjpcInV5WGRjNFBkOEdWTEFGRjd0V0V6MEFMbGhDZ25oeUN6NXh4aC95M3B1Nk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzUyNTA3NTUyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NzgxNDgyODQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
