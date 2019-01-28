const Discord = require("discord.js");

const PREFIX = "켈스야 ";

function generateHex() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}


var fortunes = [
    "네",
    "아니요",
 ];


 var gbb = [
     "가위",
     "바위",
     "보",
 ];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
    console.log(`${bot.user.tag}  는 온라인이에요!`);
    bot.user.setStatus('Idle')
    bot.user.setGame('궁금한건 켈스 _Kells#6184에게!')
});
bot.on("guildMemberadd" , function(member) {
    member.build.channels.find("name", "일반인").sendMessage(member.toString() + " 님 이 디스코드 방에 오신걸 환영합니다!");

    member.addRole(일반인)

    member.guild.createRole({
        name: member.user.username,
        color: generateHex(),
        permissions: []
    }).then(function(role) {
        member.addRole(role);
      });
    });

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "도움말":
            message.author.send("도움말은 아직 개발이 되지 않았어요!!");
            message.channel.send("도움말을 DM으로 보냈어요!")
            console.log(`${message.author.tag}가 도움말 명령어를 사용했씁니다`)
            break;
        case "똥싸기":
             message.channel.send("푸지직");
             console.log(`${message.author.tag}가 똥싸기 명령어를 사용했씁니다`);
             break;
        case "네/아니요선택기":
           if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
           else message.channel.sendMessage("사용법:!네/아니요선택기 네아니요선택할거");
           break;
           case "프로필":
              var embed = new Discord.RichEmbed()
                  .addField("프로필", "당신의 프로필 입니다!", true)
                  .setThumbnail(message.author.avatarURL)
                  .addField("프로필이름", `${message.author.tag}`)
                  .addField("ID", `${message.author.id}`)
              message.channel.sendEmbed(embed);
              break;
              case "removerole":
                  message.member.removeRole(member.guild.roles.find("name", "일반인"));
                  break;
              case "심심해":
                 message.channel.sendMessage("심심하면 Minecraft를 하세요!")
                 bot.user.setGame('Minecraft')
              case "후원":
                 message.channel.sendMessage("감사합니다! 후원은 켈스 _Kells#6184 로 DM 거셔서 문상이나 등등,(계좌이체 금지) 를 주시면 됩니다!")
              case "수능":
                message.channel.sendMessage("수능ㅊㅋ")
                break;
              case "안녕":
                 message.channel.sendMessage("ㅎㅇㅎㅇ")
                 break;
              case "핑":
                 message.channel.sendMessage("퐁!")
                 break;
              case "랜덤고양이":
                 message.channel.sendFile(`${cat}`)
                 break;
              case "가위바위보":
                if (args[1]) message.channel.sendMessage(gbb[Math.floor(Math.random() * gbb.length)]);
                else message.channel.sendMessage("사용법 : 가위바위보 낼거");
                break;
              case "핑":
                message.channel.send('퐁! 당신의 핑은 `' + `${Date.now() - message.createdTimestamp}` + ' ms 입니다!`');
              case "컴퓨터상태":
                var embed = new Discord.RichEmbed()
                    .addField("컴퓨터", "컴퓨터의 상태입니다!", true)
                    .addField("운영체제", `${os.type}`)
                    .addField("남은 메모리," `${os.freemem}`,)
                    break;
                }
            });
            bot.login(TOKEN);
