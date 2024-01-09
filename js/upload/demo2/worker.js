// import SparkMD5 from 'spark-md5';

addEventListener('message', function(event) {
  importScripts('../static/spark-md5.min.js'); //导入
  getFileMd5(event.data)
}, false)
function getFileMd5(file) {
  const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
  const chunkSize = 1024 * 1024 * 5
  const chunks = Math.ceil(file.size / chunkSize)
  let currentChunk = 0
  const spark = new SparkMD5.ArrayBuffer()
  const fileReader = new FileReader()

  fileReader.onload = function(e) {
    spark.append(e.target.result)
    console.log(spark);
    currentChunk++
    if (currentChunk < chunks) {
      loadNext()
    } else {
      console.log('finished loading');
      // console.info('computed hash', spark.end()); 
      postMessage(spark.end())
    }
  }

  fileReader.onerror = function(error) {
    console.error(error)
  }

  function loadNext() {
    const start = currentChunk * chunkSize
    const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize
    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
  }
  loadNext()
}