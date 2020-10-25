const qBank = [ 
    { 
      question: 
        "Japan was part of the Allied Powers during World War I.?", 
      answers: ["false", "true" ], 
      correct: "true", 
      questionId: "099099"
    }, 
    { 
      question: 
      "Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.  ?",  
      answers: ["false", "true" ], 
      correct: "true", 
      questionId: "093909"
    }, 
    { 
      question: 
      "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.  ?",  
      answers: ["false", "true" ], 
      correct: "true", 
      questionId: "009039"
    }, 
    { 
      question: 
        "The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot; ?", 
        answers: ["false", "true" ], 
      correct: "false", 
      questionId: "090089"
    }, 
    { 
      question: 
        "The fourth funnel of the RMS Titanic was fake designed to make the ship look more powerful and symmetrical.?", 
        answers: ["false", "true" ], 
      correct: "false", 
      questionId: "01010101"
    }, 
    { 
      question: 
        "All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate. ?", 
        answers: ["false", "true" ], 
      correct: "true", 
      questionId: "092299"
    }, 
    { 
      question: 
        "Entertainment: Television?", 
        answers: ["false", "true" ], 
      correct: "true", 
      questionId: "099099"
    }, 
    { 
      question: 
        "Entertainment: Japanese Anime & Manga ?", 
        answers: ["false", "true" ], 
      correct: "vfalse", 
      questionId: "222099"
    }, 
    { 
      question: 
        "Only one country in the world starts with the letter Q. ?", 
        answers: ["false", "true" ], 
      correct: "false", 
      questionId: "2222099"
    }, 
    
    
  ]; 
    
  // n = 5 to export 5 question 
  export default (n = 5) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
  