module Lamp where
  on = do
    putStrLn "on!"
    off
  off = do
    putStrLn "off!"
    on

  lamp = on