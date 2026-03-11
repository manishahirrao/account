# Tawk.to Live Chat Setup Guide

## What is Tawk.to?
Tawk.to is a free live chat service that allows you to communicate with your website visitors in real-time. It's perfect for providing customer support and answering questions about your accounting services.

## Setup Steps

### 1. Create a Tawk.to Account
1. Go to [https://www.tawk.to/](https://www.tawk.to/)
2. Click "Sign Up Free"
3. Create your account with your business email

### 2. Add Your Website
1. After logging in, click "Add Site"
2. Enter your website details:
   - Site Name: "IN Accountancy"
   - Website URL: Your domain (e.g., "https://yourwebsite.com")
3. Click "Add Site"

### 3. Get Your Widget Code
1. After adding your site, you'll see a dashboard
2. Click on "Administration" → "Chat Widget"
3. You'll see a script that looks like this:
```html
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_TAWK_TO_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

### 4. Update Your Website Code
1. Copy the part that looks like: `YOUR_TAWK_TO_ID/YOUR_WIDGET_ID`
2. Open the file: `src/components/TawkToChat.tsx`
3. Replace `YOUR_TAWK_TO_ID/YOUR_WIDGET_ID` with your actual IDs

**Example:**
If your script shows: `https://embed.tawk.to/64a1b2c3d4e5f6789/1h2i3j4k5l`
Then replace the line:
```typescript
script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_ID/YOUR_WIDGET_ID';
```
With:
```typescript
script.src = 'https://embed.tawk.to/64a1b2c3d4e5f6789/1h2i3j4k5l';
```

### 5. Customize Your Chat Widget
In your Tawk.to dashboard, you can:
- **Appearance**: Change colors to match your Sage green theme
- **Behavior**: Set when the chat appears
- **Messages**: Customize welcome messages
- **Agents**: Add team members who can respond to chats

### 6. Recommended Settings for Your Business
1. **Welcome Message**: "Hi! Need help with accounting or tax services? We're here to help!"
2. **Offline Message**: "We're currently offline. Leave us a message and we'll get back to you soon!"
3. **Colors**: Use your Sage green theme colors
4. **Position**: Bottom right corner (default)
5. **Trigger**: Show after 30 seconds or when user scrolls 50%

### 7. Mobile App
Download the Tawk.to mobile app to respond to chats on the go:
- iOS: Search "Tawk.to" in App Store
- Android: Search "Tawk.to" in Google Play Store

## Benefits for Your Accounting Business
- **Instant Support**: Answer client questions immediately
- **Lead Generation**: Convert website visitors into clients
- **Professional Image**: Shows you're accessible and responsive
- **Free Service**: No monthly fees
- **Analytics**: Track visitor behavior and chat metrics

## What's Already Done
✅ Chat component created (`TawkToChat.tsx`)
✅ Added to your website layout
✅ Will appear on all pages automatically

## What You Need to Do
1. Create your Tawk.to account
2. Get your widget IDs
3. Update the `TawkToChat.tsx` file with your IDs
4. Customize the appearance and messages

Once you complete these steps, the live chat widget will appear on your website and you can start chatting with visitors!