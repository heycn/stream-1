// 内置的 Transform Stream
// 压缩文件 并 解密

const fs = require('fs')
const zlib = require('zlib')
const file = process.argv[2]
const crypto = require('crypto') // 自带的加密模块
const {Transform} = require('stream')

const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.')
    callback(null, chunk)
  }
})

fs.createReadStream(file)
  .pipe(crypto.createCipher('aes192', '123456'))
  .pipe(zlib.createGzip())
  .pipe(reportProgress)
  .on('data', () => process.stdout.write('.')) // 进度条
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('\n压缩完毕'))