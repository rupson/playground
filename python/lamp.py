def on():
  print('on!\n')
  off()
  
def off():
  print('off!')
  on()

if __name__ == "__main__":
  on()