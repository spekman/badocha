const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const aleatorio = require('./aleatorio.json');
let random = Math.floor(Math.random() * 18);
let juna = Math.floor(Math.random() * 25);
const embed = require('./embed.json');
const fetch = require('node-fetch');
var intervalo;
const { MessageEmbed, MessageAttachment } = require('discord.js')



client.once('ready', () => {
    console.log('Pronto.');
    client.user.setActivity('JOAO GABRIEL HISTORIA EP 7 VAZAMENTO OFICIAL!!!!', { type: 'WATCHING' });
});

fetch('https://aws.random.cat/meow').then(res => res.json());
fetch('https://some-random-api.ml/img/dog').then(res => res.json());
fetch('https://some-random-api.ml/img/pikachu').then(res => res.json());
fetch('https://some-random-api.ml/img/birb').then(res => res.json());
fetch('https://some-random-api.ml/animu/hug').then(res => res.json());
fetch('https://some-random-api.ml/animu/pat').then(res => res.json());
fetch('https://some-random-api.ml/animu/wink').then(res => res.json());

client.on('message', async message => {
if (message.author.bot || message.author.id === "533632380007612416") return;
if (message.content.toLowerCase() === 'gato'){
    const {file} = await fetch('https://aws.random.cat/meow').then(res => res.json());
    message.channel.send(file);
} else if (message.content.toLowerCase() === 'cachorro'){
    const {link} = await fetch('https://some-random-api.ml/img/dog').then(res => res.json());
    message.channel.send(link);
} else if (message.content.toLowerCase() === 'pikachu'){
    const {link} = await fetch('https://some-random-api.ml/img/pikachu').then(res => res.json());
    message.channel.send(link);
} else if (message.content.toLowerCase() === 'titico'){
    const {link} = await fetch('https://some-random-api.ml/img/birb').then(res => res.json());
    message.channel.send(link);
} else if (message.content.toLowerCase() === 'abraça' || message.content.toLowerCase() === 'abraca'){
    const {link} = await fetch('https://some-random-api.ml/animu/hug').then(res => res.json());
    message.channel.send(link);
} else if (message.content.toLowerCase() === 'pisca'){
    const {link} = await fetch('https://some-random-api.ml/animu/wink').then(res => res.json());
    message.channel.send(link);
} else if (message.content.toLowerCase() === 'carinho'){
    const {link} = await fetch('https://some-random-api.ml/animu/pat').then(res => res.json());
    message.channel.send(link);
} else if (message.content.toLowerCase() === 'inverte'){
    let link = `https://some-random-api.ml/canvas/invert/?avatar=${message.author.avatarURL({ format: 'png'})}`
    let attachment = new MessageAttachment(link, 'invert.png');
    message.channel.send(attachment);
}
});

client.on('message', (message) => {
if (message.author.bot || message.author.id === "533632380007612416") return

if (message.channel.type == 'dm' && message.content.toLowerCase().includes('flood')){
    message.author.send('para parar o flood escreva "para" :)');
    intervalo = setInterval(function(){message.author.send('flood')}, 2000);
} else if (message.channel.type == 'dm' && message.content.toLowerCase().includes('para')){
    clearInterval(intervalo);
}

if (message.author.id !== config.userID && message.channel.type == 'dm'){
    console.log(message.author.username + ": " + message.content);
}

const filter = (m) => m.content.toLowerCase() === message.content.toLowerCase();
const collector = message.channel.createMessageCollector(filter, {
  max: 2,
  time: 7000,
});
collector.on('end', (collected) => {
  if (collected.size > 1 && collected.size < 3) {
    message.channel.send(`${message.content}_ _`);
  }
});

if (message.channel.type == 'dm' && message.author.id === config.userID && message.content.endsWith('..')){
    let amigo = message.content.slice(0, -2);
    client.channels.cache.get('693602304020185102').send(amigo.trim());
    return
} else if (message.channel.type == 'dm' && message.content.toLowerCase() == 'oi'){
    message.author.send('Oiii rsrs');
}



    else if (message.author.id !== config.userID && message.content.toLowerCase() === 'badocha'){
        message.channel.send('https://www.youtube.com/channel/UCe6xvyOnd6lLDZt_jZk5DHA');
    } else if (message.content.toLowerCase() === 'gustavo gamer'){
        message.channel.send('https://youtube.com/channel/UClMACfqvvo_3vNvPdUmRbVw');
    } else if (message.content.toLowerCase() === 'blingee'){
        random = Math.floor(Math.random() * 18);
        message.channel.send(aleatorio.blingee[random]);
    } else if (message.content.toLowerCase() === 'astolfo'){
        juna = Math.floor(Math.random() * 25);
        message.channel.send(aleatorio.astolfo[juna]);
    } 
    
     else if (message.content.toLowerCase() === 'fodase'){
        message.author.send('fodase vc fdp');

    } else if (message.content.toLowerCase() === 'tingus'){
        message.channel.send('https://cdn.discordapp.com/attachments/693602304020185102/800035999061245952/IMG_20210113_175137.jpg');
    } else if (message.content.toLowerCase() === 'kirby'){
        message.channel.send('https://media.discordapp.net/attachments/734848730078904351/747460770140520478/tenor.gif');
    } else if (message.content.toLowerCase() === 'minecraft'){
        message.channel.send('https://cdn.discordapp.com/attachments/693602304020185102/799404176948985876/tenor_4.gif');
    } else if (message.content.toLowerCase() === 'roblox'){
        message.channel.send('https://tenor.com/view/simplycanadian-roblox-roblox-ragdoll-engine-ragdoll-roblox-ragdoll-gif-17209451');
    } else if (message.content.toLowerCase() === 'bingus'){
        message.channel.send('https://cdn.discordapp.com/attachments/792910493383655465/799386256869425252/450.png');
    } else if (message.content.toLowerCase() === 'joao gabriel'){
        message.channel.send('https://cdn.discordapp.com/attachments/693602304020185102/799403537285120002/IMG-20200703-WA0027.jpg');
    } else if (message.content.toLowerCase() === 'terraria'){
        message.channel.send('https://youtu.be/UfnDmNZAufk');
    } else if (message.content.toLowerCase() === 'pussy'){
        message.channel.send('puçi 😂');
    } else if (message.content.toLowerCase() === 'coelho'){
        message.channel.send('https://cdn.discordapp.com/attachments/789563060581957683/800174462565220372/IMG-20210116-WA0014.jpg');
    }

    else if (message.content.includes('2012')){
        message.channel.send('https://i.ytimg.com/vi/kynh-oy63Fw/maxresdefault.jpg');
    } else if (message.content.toLowerCase().includes('thiccaroni')){
        message.channel.send('https://cdn.discordapp.com/attachments/792911084276154388/799267347663552522/b2f960cf3a69d68b5f6a1b86346598cc.png');
    } else if (message.content.toLowerCase().includes('floppa')){
        message.channel.send('https://tenor.com/view/floppa-gif-19452847');
    } else if (message.content.toLowerCase().includes('bado chan')){
        message.author.send('oiiiiii lindo :)');
    } else if (message.author.id !== config.userID && message.content.toUpperCase().includes('KKKKKKKKKKKKKKKKKKKKKKKKK')){
        message.channel.send('qual a graça palhaço');
    }

    if (message.content.toLowerCase().includes('oi')){
        message.react('🇴');
        message.react('🇮');
    } if (message.content.toLowerCase().includes('cu')){
        message.react('🇨');
        message.react('🇺');
    } if (message.content.toLowerCase().includes('puta') && !message.content.toLowerCase().includes('cu')){
        message.react('🇵');
        message.react('🇺');
        message.react('🇹');
        message.react('🇦');
    } if (message.content.toLowerCase().includes('pau') || message.content.toLowerCase().includes('dick') && !message.content.toLowerCase().includes('puta') && 
    !message.content.toLowerCase().includes('cu') && !message.content.toLowerCase().includes('paulo')){
        message.react('🇵');
        message.react('🇦');
        message.react('🇺');
    }

    else if (message.author.id !== config.userID && message.mentions.has(client.user.id)){
        message.channel.send(embed);
    } else if (message.author.id === config.userID && message.mentions.has(client.user.id)){
        message.channel.send('adeus :(').then(() =>{
        process.exit();
        })
    }
});


client.login(config.token);