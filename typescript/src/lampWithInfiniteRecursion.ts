const on = () => {
  console.log('on')
  setTimeout(() => {
    off()
  }, 0)
}

const off = () => {
  console.log('off')
  setTimeout(() => {
    on()
  }, 0)
}

const lamp = () => on();

lamp()