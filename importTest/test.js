import {Chrono, sleep } from 'js-awe'

let chrono = Chrono()

chrono.time('step0')
await sleep(50)
chrono.timeEnd('step0')
chrono.time('step1')
chrono.time('step2')
await Promise.all([
  sleep(150).then(() => chrono.timeEnd('step1')),
  sleep(100).then(() => chrono.timeEnd('step2'))
])
chrono.time('step3')
await sleep(50)
chrono.timeEnd('step3')
chrono.report()