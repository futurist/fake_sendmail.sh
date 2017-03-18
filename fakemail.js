var fs = require('fs')
var path = require('path')
var proc = require ('child_process')

var mailFolder = '/Users/pro/projects/texdata' // '/root/mail'
var newFolder = mailFolder + '/new'
var numFile = mailFolder + '/emailNumbers'
ensureFolder(mailFolder)
ensureFolder(newFolder)

try {
  var num = parseInt(fs.readFileSync(numFile))
} catch(e) {
  var num = 0
}

var content = ''
process.stdin.resume()
process.stdin.setEncoding('utf-8')
process.stdin.on('data', function (buf) { 
  content += buf + ''
})
process.stdin.on('end', function () {
  // your code here
  // console.log(content)
  num++
  fs.writeFile( path.join(newFolder, num+'.eml'), content, e=>e )
  fs.writeFile( numFile, num, e=>e )
})


function ensureFolder(folder) {
  try {
    fs.statSync(folder)
  } catch(e) {
    fs.mkdirSync(folder)
  }
}

function sendMail (body) {

    `curl -s --user "${token}" https://api.mailgun.net/v3/sandbox28d0690f5af045f09f87eff25d2770f6.mailgun.org/messages \
        -F from='ly-root <postmaster@sandbox28d0690f5af045f09f87eff25d2770f6.mailgun.org>' \
        -F to="${to}" \
        -F subject="${subject}" \
        -F text="${body}"`
}

