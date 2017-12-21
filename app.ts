/*
  A bot that welcomes new members when they join
*/

//

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me

const token = '';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
    console.log('CalWelcomeBot is ready!');
});


// Create an event listener for new members
client.on('guildMemberAdd', member => {
    // Send the message to #welcome (our default channel)
    member.guild.defaultChannel.send(`Welcome to the Cal CS/EECS Discord server, ${member}!`);
    member.guild.defaultChannel.send('Please help me start the quick __**4-step**__ verification process for you!');
    member.guild.defaultChannel.send('**If you fail to complete the 4-step process by Friday at 1pm PST, you will be removed from the server.**');
    member.guild.defaultChannel.send('__**Step 1**__: Set your nickname to your real **first** and **last** name!');
    member.guild.defaultChannel.send('Make sure it\'s your real name for the **Admins** to verify you faster!');
    member.guild.defaultChannel.send('Question: Are you on desktop or mobile? (Hint: type \'**desktop**\' or \'**mobile**\')');

    // If you want to send the message to a designated channel on a server instead
    // you can do the following:
    const channel = member.guild.channels.find('name', 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);

});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping" for Admin testing
    if (message.content === 'ping' || message.content === 'Ping') {
        // Starts process
        message.reply('Please help me start the quick __**4-step**__ verification process for you!');
        message.channel.send('**If you fail to complete the 4-step process by Friday at 1pm PST, you will be removed from the server.**');
        message.channel.send('__**Step 1**__: Set your nickname to your real **first** and **last** name!');
        message.channel.send('Make sure it\'s your **real name** for our Admins to verify you faster!');
        message.channel.send('**Question: Are you on desktop or mobile?** (Hint: type \'**desktop**\' or \'**mobile**\')');
    }

    // If the message is "desktop"
    if (message.content === 'desktop' || message.content === 'Desktop') {
        // Assigns Unverified role
        message.member.addRole("309008189595189248");
        // Sends desktop nickname info
        message.reply('Here\'s the steps for **desktop**! (Or, type \'mobile\' to switch.)');
        message.channel.send('1) Type the following into the chat, but with your real first **and** last name replacing \'John Doe\':');
        message.channel.send('**/nick John Doe**');
        message.channel.send('2) Type \'**done**\' when you\'ve got it!');
    }

    // If the message is "mobile"
    if (message.content === 'mobile' || message.content === 'Mobile') {
        // Assigns Unverified role
        message.member.addRole("309008189595189248");
        // Sends mobile nickname info
        message.reply('Here\'s the steps for **mobile**! (Or, type \'desktop\' to swtich.)');
        message.channel.send('1) Tap on the top left corner to open the sidebar.');
        message.channel.send('2) Tap on the three dots at the top right corner of the sidebar, near the words \'Cal CS/EECS\'.');
        message.channel.send('3) Tap on \'Change Nickname\' and input your real first **and** last name!');
        message.channel.send('4) Type \'**done**\' when you\'ve got it!');
    }

    // If the message is "done"
    if (message.content === 'done' || message.content === 'Done') {
        // Asks for year
        message.reply('Congrats on changing your name!');
        message.channel.send('**__Step 2__: Are you a freshman, sophomore, junior, or senior?** (Hint: type \'**freshman,**\' \'**sophomore,**\' \'**junior**,\' or \'**senior**\')');
    }

    // If the message is "freshman"
    if (message.content === 'freshman' || message.content === 'Freshman') {
        // Assigns Freshmen role
        message.member.addRole("320001413264441344");
        // Asks for cs eecs
        message.reply('Almost done!');
        message.channel.send('**__Step 3__: Are you in CS or EECS?** (Hint: type \'**cs**\' or \'**eecs**\')');
    }

    // If the message is "sophomore"
    if (message.content === 'sophomore' || message.content === 'Sophomore') {
        // Assigns Sophomores role
        message.member.addRole("320001570026815490");
        // Asks for cs eecs
        message.reply('Almost done!');
        message.channel.send('**__Step 3__: Are you in CS or EECS?** (Hint: type \'**cs**\' or \'**eecs**\')');
    }
    
    // If the message is "junior"
    if (message.content === 'junior' || message.content === 'Junior') {
        // Assigns Juniors role
        message.member.addRole("320001671138770965");
        // Asks for cs eecs
        message.reply('Almost done!');
        message.channel.send('**__Step 3__: Are you in CS or EECS?** (Hint: type \'**cs**\' or \'**eecs**\')');
    }

    // If the message is "senior"
    if (message.content === 'senior' || message.content === 'Senior') {
        // Assigns Seniors role
        message.member.addRole("320001793906049036");
        // Asks for cs eecs
        message.reply('Almost done!');
        message.channel.send('**__Step 3__: Are you in CS or EECS?** (Hint: type \'**cs**\' or \'**eecs**\')');
    }

    // If the message is "CS"
    if (message.content === 'CS' || message.content === 'cs' || message.content === 'Cs') {
        // Assigns L&S CS role
        message.member.addRole("308027072658407424");
        message.reply('You\'ve been placed in the **L&S CS** role!');
        message.channel.send('__**Step 4**__: Use your official **@berkeley.edu** email to send your **full name** and **discord username** to __berkeleydiscord@gmail.com__.');
        message.channel.send('Please wait patiently to be placed in the all-access **Verified** role after sending!');
        message.channel.send('**If you fail to complete the 4-step process by Friday at 1pm PST, you will be removed from the server.**');
        message.channel.send('In the meantime, download the Discord desktop app from <https://discordapp.com> and the mobile app from the iOS/Google Play stores!');
        message.channel.send('DM any questions to one of our four Admins:');
        message.channel.send('**Teela Huff** @Sylladices#4227');
        message.channel.send('**Charlie Liston** @Yaihi\'l#6792');
        message.channel.send('**Taejong Kim** @Fayrl#7334');
        message.channel.send('**Benjamin Wu** @Pinbat#7143');
        message.channel.send('Have a :bear:-y nice day!');
    }

    // If the message is "EECS"
    if (message.content === 'EECS' || message.content === 'eecs' || message.content === 'Eecs') {
        // Assigns EECS role
        message.member.addRole("308026936565956609");
        message.reply('You\'ve been placed in the **EECS** role!');
        message.channel.send('__**Step 4**__: Use your official **@berkeley.edu** email to send your **full name** and **discord username** to __berkeleydiscord@gmail.com__.');
        message.channel.send('Please wait patiently to be placed in the all-access **Verified** role after sending!');
        message.channel.send('**If you fail to complete the 4-step process by Friday at 1pm PST, you will be removed from the server.**');
        message.channel.send('In the meantime, download the Discord desktop app from <https://discordapp.com> and the mobile app from the iOS/Google Play stores!');
        message.channel.send('DM any questions to one of our four Admins:');
        message.channel.send('**Teela Huff** @Sylladices#4227');
        message.channel.send('**Charlie Liston** @Yaihi\'l#6792');
        message.channel.send('**Taejong Kim** @Fayrl#7334');
        message.channel.send('**Benjamin Wu** @Pinbat#7143');
        message.channel.send('Have a :bear:-y nice day!');
    }

});

// Log our bot in
client.login(token);
