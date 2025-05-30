const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');

const socialList = [
  {
    name: 'Gmail-1',
    data: {
        url: '',
        username: '',
        email: 'ibrahim094islam@gmail.com',
        mobile: '01908111251',
        password: [48, 49, 57, 48, 56, 49, 49, 49, 105, 98, 114, 97, 104, 105, 109, 46, 110, 101, 116 ],
    }
  },
  {
    name: 'Gmail-2',
    data: {
        url: '',
        username: '',
        email: 'mr.gamerboos12345@gmail.com',
        mobile: '01908111251',
        password: [73, 98, 114, 97, 104, 105, 109, 46, 48, 48, 48, 46, 110, 101, 116, 57, 56, 51, 70, 70 ],
    }
  },
  {
    name: 'Gmail-3',
    data: {
        url: '',
        username: '',
        email: 'amarbazardotcom009@gmail.com',
        mobile: '',
        password: [97, 109, 97, 114, 66, 97, 122, 97, 114, 46, 99, 111, 109, 48, 48, 57 ],
    }
  },
  {
    name: 'Gmail-4',
    data: {
        url: '',
        username: '',
        email: 'ibrahimcc009@gmail.com',
        mobile: '',
        password: [105, 98, 114, 97, 104, 105, 109, 67, 67, 48, 48, 57, 71, 109, 97, 105, 108, 65, 99, 99 ],
    }
  },
  {
    name: 'facebook-1',
    data: {
        url: 'https://www.facebook.com/ibrahim094is',
        username: 'ibrahim094is',
        email: 'ibrahim094islam@gmail.com',
        mobile: '01908111251',
        password: [73, 65, 109, 105, 98, 46, 110, 101, 116, 48, 48, 57, 56, 32],
    }
  },
  {
    name: 'facebook-2',
    data: {
        url: 'https://www.facebook.com/IBRAHIMCC009',
        username: 'IBRAHIMCC009',
        email: '',
        mobile: '01908111251',
        password: [105, 98, 114, 97, 104, 105, 109, 67, 67, 48, 48, 57 ],
    }
  },
  {
    name: 'instagram',
    data: {
        url: 'https://www.instagram.com/ibrahim094is',
        username: 'ibrahim094is',
        email: 'ibrahim094islam@gmail.com',
        mobile: '01908111251',
        password: [73, 65, 109, 105, 98, 46, 110, 101, 116, 48, 48, 57, 56, 32],
    }
  },
  {
    name: 'Github',
    data: {
        url: 'https://github.com/ibrahimis5684',
        username: 'ibrahimis5684',
        email: 'mr.gamerboos12345@gmail.com',
        mobile: '',
        password: [77, 54, 53, 106, 75, 81, 120, 51, 118, 52, 76, 101, 116, 64, 68 ],
    }
  },
  {
    name: 'microsoft',
    data: {
        url: '',
        username: '',
        email: 'ibrahim094islam@gmail.com',
        mobile: '',
        password: [68, 83, 53, 52, 37, 55, 51, 53, 106, 111, 100, 101, 115, 40, 36, 50, 53, 52, 100, 102, 115, 100 ],
    }
  },
  {
    name: 'Discord',
    data: {
        url: '',
        username: '',
        email: '',
        mobile: '01908111251',
        password: [83, 98, 64, 119, 120, 109, 87, 37, 50, 90, 100, 97, 115, 55, 94 ],
    }
  },
  {
    name: 'E-passport',
    data: {
        url: 'https://www.epassport.gov.bd/landing',
        username: '',
        email: 'ibrahim094islam@gmail.com',
        mobile: '',
        password: [73, 73, 98, 114, 97, 104, 105, 109, 53, 51, 35, 40, 41, 48, 107, 105, 10],
    }
  },
  {
    name: 'upworks',
    data: {
        url: '',
        username: '',
        email: 'mr.gamerboos12345@gmail.com',
        mobile: '',
        password: [117, 35, 104, 89, 102, 97, 65, 86, 75, 54, 47, 57, 78, 113, 82 ],
    }
  },
  {
    name: 'steam',
    data: {
        url: '',
        username: 'ibrahimcc009',
        email: 'ibrahimcc009@gmail.com',
        mobile: '',
        password: [108, 97, 107, 106, 115, 100, 108, 107, 72, 75, 76, 69, 53, 52, 36, 36 ],
    }
  },
  {
    name: 'dropshop',
    data: {
        url: '',
        username: 'amarbazar009',
        email: 'amarbazardotcom009@gmail.com',
        mobile: '',
        password: [73, 98, 114, 97, 104, 105, 109, 67, 67, 48, 48, 57, 64, 50, 52, 53, 54, 100, 107 ],
    }
  },
];

const aliasMap = {
  user: 'username',
  em: 'email',
  pass: 'password',
  mob: 'mobile'
};

let awaitingPinFor = null;
let awaitingPinCopyData = null;

const ENCRYPTED_PIN_SUM = 274; // 8(56)+5(53)+8(56)+5(53)+8(56)

function printToTerminal(text) {
  output.innerHTML += `<div>C:\\Users\\ibrahim\\social-media> ${text}</div>`;
}

function showCopied(value) {
  output.innerHTML += `<div class="copied">Copied: ${value}</div>`;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => showCopied(text))
    .catch(err => alert("Copy failed: " + err));
}

function getPlatformObject(input) {
  const index = parseInt(input);
  if (!isNaN(index) && index >= 1 && index <= socialList.length) {
    return socialList[index - 1];
  }
  return socialList.find(item => item.name === input);
}
async function showSocialList() {
  for (let i = 0; i < socialList.length; i++) {
    const name = socialList[i].name;
    const index = i + 1;
    const formattedIndex = index < 10 ? '0' + index : index; // ০১, ০২,...০৯
    await typeLine(`${formattedIndex} Available: ${capitalize(name)}`);
  }
  output.innerHTML += `<div class="suggestion">Type: [platform] [requirement]</div>`;
}


function typeLine(text, delay = 1, container = output) {
  return new Promise(resolve => {
    let i = 0;
    const line = document.createElement('div');
    container.appendChild(line);

    function typeChar() {
      if (i < text.length) {
        line.innerHTML = text.slice(0, i + 1) + '<span class="typing"></span>';
        i++;
        setTimeout(typeChar, delay);
      } else {
        line.innerHTML = text;
        resolve();
      }
    }

    typeChar();
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function showAllDetails(platformObj) {
  const block = document.createElement('div');
  block.className = 'details-block';
  output.appendChild(block);

  const lines = [
    `${capitalize(platformObj.name)}:`,
    `URL ........................... : ${platformObj.data.url}`,
    `username ...................... : ${platformObj.data.username}`,
    `mobile ........................ : ${platformObj.data.mobile}`,
    `email ......................... : ${platformObj.data.email}`,
    `password ...................... : ********`
  ];
  for (const line of lines) {
    await typeLine(line, 1, block);
  }
}

// ডিক্রিপ্ট ফাংশন: এনক্রিপ্টেড অ্যারে থেকে স্ট্রিং বের করবে
function decrypt(codeArray) {
  return codeArray.map(code => String.fromCharCode(code)).join('');
}

function encryptedPinCheck(pinInput) {
  let sum = 0;
  for (let i = 0; i < pinInput.length; i++) {
    sum += pinInput.charCodeAt(i);
  }
  return sum === ENCRYPTED_PIN_SUM;
}

// Custom text that will be copied whenever user manually copies anything on the page
const customCopyText = "🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕🖕";

commandInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const inputRaw = commandInput.value.trim();
    const input = inputRaw.toLowerCase();

    printToTerminal(inputRaw);
    commandInput.value = "";

    if (awaitingPinFor !== null) {
      if (encryptedPinCheck(inputRaw)) {
        copyToClipboard(awaitingPinCopyData);
        awaitingPinFor = null;
        awaitingPinCopyData = null;
      } else {
        output.innerHTML += `<div class="error">Incorrect PIN. Copy aborted.</div>`;
        awaitingPinFor = null;
        awaitingPinCopyData = null;
      }
      output.scrollTop = output.scrollHeight;
      return;
    }

    const parts = input.split(" ");

    if (parts.length === 1) {
      const platformObj = getPlatformObject(parts[0]);
      if (platformObj) {
        showAllDetails(platformObj);
      } else {
        output.innerHTML += `<div class="error">Unknown command or platform.</div>`;
      }
      output.scrollTop = output.scrollHeight;
      return;
    }

    if (parts.length !== 2) {
      output.innerHTML += `<div class="error">Invalid command. Try: 1 username or facebook user</div>`;
      output.scrollTop = output.scrollHeight;
      return;
    }

    const [platformInput, fieldInput] = parts;
    const field = aliasMap[fieldInput] || fieldInput;

    const platformObj = getPlatformObject(platformInput);
    if (platformObj && platformObj.data[field]) {
      let copyData = platformObj.data[field];

      // যদি পাসওয়ার্ড হয় এবং সেটি এনক্রিপ্টেড অ্যারে হয়, ডিক্রিপ্ট করো
      if (field === 'password' && Array.isArray(copyData)) {
        copyData = decrypt(copyData);
      }

      output.innerHTML += `<div class="pin-box">Enter PIN to copy:</div>`;
      awaitingPinFor = platformInput + ' ' + fieldInput;
      awaitingPinCopyData = copyData;
    } else {
      output.innerHTML += `<div class="error">Data not found for '${platformInput} ${fieldInput}'</div>`;
    }
    output.scrollTop = output.scrollHeight;
  }
});

window.onload = () => {
  showSocialList();
};

// কপি ইভেন্ট হ্যান্ডলার: যখনই ইউজার কিছু কপি করবে, কাস্টম টেক্সট কপি হবে
document.addEventListener('copy', (e) => {
  e.preventDefault();
  if (e.clipboardData) {
    e.clipboardData.setData('text/plain', customCopyText);
  } else if (window.clipboardData) {
    window.clipboardData.setData('Text', customCopyText);
  }
});