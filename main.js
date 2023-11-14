const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OC40MyA2MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOC42Myw4LjY2Yy4zMi4xLjgxLjIzLDEuMjcuNDEsMS43NC42OCwzLjQ3LDEuNCw1LjIyLDIuMDguMy4xMi43NC4yOSwxLC4xN2E0MC4xMSw0MC4xMSwwLDAsMCwzLjUzLTIuMDZjLjIzLS4xNC4yOC0uNjEuMzMtLjk1cS40Mi0yLjg0LjgyLTUuNjdhMi43LDIuNywwLDAsMSwzLTIuNjNIMzQuNjVjMS44NCwwLDIuNzUuODUsMywyLjcycy41NSwzLjg2Ljg2LDUuNzljLjE3LDEsMy44LDMsNC43NywyLjY0LDEuNzctLjcxLDMuNTQtMS40NCw1LjMxLTIuMTRzMi45My0uMzIsMy45MywxLjM5UTU1LjE4LDE1LDU3LjgsMTkuNTNjMSwxLjguNzksMy0uODYsNC4yNkM1NS41NiwyNC44Nyw1NC4xOSwyNiw1Mi43OCwyN0ExLjYxLDEuNjEsMCwwLDAsNTIsMjguNzZhMi44OSwyLjg5LDAsMCwxLDAsMS4xN2MtLjQ1LDEuODkuNDcsMywyLDRhMzYuNywzNi43LDAsMCwxLDMuMTUsMi40MywyLjcxLDIuNzEsMCwwLDEsLjgyLDMuOTFRNTUuMiw0NSw1Mi40Miw0OS43N0EyLjY2LDIuNjYsMCwwLDEsNDguNzQsNTFjLTEuNzQtLjY4LTMuNDctMS4zOS01LjIxLTIuMDktLjIxLS4wOC0uNDMtLjE5LS42NS0uMjUtLjctLjE5LTQuMjMsMi00LjM1LDIuNzdxLS40NSwyLjk0LS44Nyw1LjlhMi43LDIuNywwLDAsMS0zLDIuNjNIMjMuNzljLTEuODUsMC0yLjc3LS44Ni0zLTIuNzJzLS40OS0zLjQ3LS43NC01LjIxYzAtLjIzLS4wOC0uNDYtLjEzLS42OS0uMjEtLjk1LTMuODUtMi44OS00Ljc1LTIuNTMtMS43Ny43LTMuNTQsMS40My01LjMxLDIuMTNTNi45LDUxLjMsNS45LDQ5LjU5UTMuMjYsNDUsLjY0LDQwLjQ4Yy0xLTEuODEtLjgtMywuODQtNC4yNkMyLjg2LDM1LjEzLDQuMjMsMzQsNS42NSwzM2ExLjY0LDEuNjQsMCwwLDAsLjgzLTEuNzUsMi44NSwyLjg1LDAsMCwxLDAtMS4xNmMuNDQtMS44OS0uNDYtMy0yLTRhMzcuMjUsMzcuMjUsMCwwLDEtMy4yNC0yLjVBMi42OCwyLjY4LDAsMCwxLC41LDE5Ljc2QzIuMzEsMTYuNTcsNC4xNywxMy40MSw2LDEwLjIzQTMsMywwLDAsMSw4LjYzLDguNjZaTTI5LjE5LDIwYTEwLDEwLDAsMSwwLDEwLDEwQTEwLjA2LDEwLjA2LDAsMCwwLDI5LjE5LDIwWiIvPjwvZz48L2c+PC9zdmc+';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitKeypadMPR121Extention {

    getInfo () {
        return {
            id: 'YoloBitKeypadMPR121Extention',
            parentMode: 'yoloBit',
            name: 'KeypadMPR121',
            blockIconURI: iconURL,
            allowBlockTypes: {
            },
            color1: '#e63022',
            color2: '#e63022',
            blocks: [
                {
                    opcode: 'touchpad_checkkeypad',
                    rawCode: {
                        imports: 'from yolobit import *\n from machine import Pin, I2C\n from keypad121 import MPR121\n',
                        code: 'keypad = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))\n keypad.check_keypad()\n'
                    },
                    text: [
                        {
                            default: 'đọc phím vừa được chạm',
                            id: "gui.externalExtension.YoloBitKeypadMPR121Extension.touchpad_checkkeypad"
                        }
                    ],
                    blockType: Scratch.BlockType.NONE

                },
                {
                    opcode: 'touchpad_istouch',
                    rawCode: {
                        imports: 'from yolobit import *\n from machine import Pin, I2C\n from keypad121 import MPR121\n',
                        code: 'keypad = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))\n keypad.check_keypad() ==' + "'/*{KEY}*/'\n"
                    },
                    text: [
                        {
                            default: 'kiểm tra phím [KEY] được chạm',
                            id: "gui.externalExtension.YoloBitKeypadMPR121Extension.touchpad_istouch"
                        }
                    ],
                    arguments: {
                        TIMEZONE: {
                            menu: 'key'
                        }
                    },
                    blockType: Scratch.BlockType.NONE
                }
            ],
            menus: {
                key: [
                    {
                        text: {
                            default: '1',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.1'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default: '2',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.2'
                        },
                        value: '2'
                    },
                    {
                        text: {
                            default: '3',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.3'
                        },
                        value: '3'
                    },
                    {
                        text: {
                            default: '4',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.4'
                        },
                        value: '4'
                    },
                    {
                        text: {
                            default: '5',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.5'
                        },
                        value: '5'
                    },
                    {
                        text: {
                            default: '6',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.6'
                        },
                        value: '6'
                    },
                    {
                        text: {
                            default: '7',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.7'
                        },
                        value: '7'
                    },
                    {
                        text: {
                            default: '8',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.8'
                        },
                        value: '8'
                    },
                    {
                        text: {
                            default: '9',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.9'
                        },
                        value: '9'
                    },
                    {
                        text: {
                            default: '0',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.0'
                        },
                        value: '0'
                    },
                    {
                        text: {
                            default: '*',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.*'
                        },
                        value: '*'
                    },
                    {
                        text: {
                            default: '#',
                            id: 'gui.externalExtension.YoloBitKeypadMPR121Extention.#'
                        },
                        value: '#'
                    }
                ]    
            }
        };
    }
}
Scratch.extensions.register(new Scratch3YoloBitKeypadMPR121Extention());