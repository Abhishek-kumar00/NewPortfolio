import React from 'react'
import Typewriter from "typewriter-effect";

function Hello() {
    return (
        <Typewriter 
          options={{
            strings: [
              "Hi There",
              "नमस्ते",
              "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
              "प्रणाम",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
    );
}

export default Hello
