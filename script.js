(function () {
  function question(title, prompt, answers, correct, explanation) {
    return { title: title, prompt: prompt, answers: answers, correct: correct, explanation: explanation };
  }

  var courses = {
    telugu: {
      name: "Telugu",
      icon: "తె",
      subtitle: "Everyday Telugu",
      accent: "#a85f10",
      accentDark: "#854909",
      accentLight: "#fff2df",
      language: "te-IN",
      heroTitle: "Shop at the local market",
      heroDescription: "Ask for fresh fruit and check prices at a neighborhood market.",
      heroIcon: "🧺",
      heroPlant: "🌿",
      unit: "Unit 1 · Everyday conversations",
      phraseTitle: "Useful at the market",
      phrase: "ఇది ఎంత?",
      translation: "How much is this?",
      tipTitle: "A useful Telugu question",
      tip: "Use this phrase when you want to ask the price of something.",
      lessons: [
        {
          title: "Ask the price at a market",
          description: "Ask a vendor the price of fruit and vegetables.",
          icon: "🧺",
          question: question("You want to know the price of mangoes.", "How do you ask “How much is this?”", ["ఇది ఎంత?", "మీరు ఎక్కడికి వెళ్తున్నారు?", "నా పేరు రవి."], 0, "Correct! “ఇది ఎంత?” means “How much is this?”")
        },
        {
          title: "Find the bus stop",
          description: "Ask a local where to catch your bus.",
          icon: "🚌",
          question: question("You need to find the bus stop.", "Choose “Where is the bus stop?”", ["బస్సు ఎక్కడ ఉంది?", "నాకు నీళ్లు కావాలి.", "ధన్యవాదాలు."], 0, "Right! This is a useful question when asking for directions.")
        },
        {
          title: "Thank someone politely",
          description: "Use a polite phrase after getting help.",
          icon: "🙏",
          question: question("A shopkeeper helps you with your bags.", "What is a polite way to say “Thank you”?", ["ఎంత ధర?", "ధన్యవాదాలు.", "బస్సు ఎక్కడ?"], 1, "Well done! “ధన్యవాదాలు” means “Thank you.”")
        }
      ],
      words: [
        { term: "నమస్కారం", meaning: "Hello / greetings", example: "నమస్కారం! ఎలా ఉన్నారు?", category: "Greetings" },
        { term: "ధన్యవాదాలు", meaning: "Thank you", example: "సహాయం చేసినందుకు ధన్యవాదాలు.", category: "Polite phrases" },
        { term: "ఇది ఎంత?", meaning: "How much is this?", example: "ఈ పుస్తకం ఎంత?", category: "At the market" },
        { term: "నీళ్లు", meaning: "Water", example: "దయచేసి నీళ్లు ఇవ్వండి.", category: "Everyday words" },
        { term: "బస్సు", meaning: "Bus", example: "బస్సు ఎక్కడ ఉంది?", category: "Getting around" },
        { term: "దయచేసి", meaning: "Please", example: "దయచేసి నెమ్మదిగా మాట్లాడండి.", category: "Polite phrases" }
      ]
    },
    hindi: {
      name: "Hindi",
      icon: "हि",
      subtitle: "Everyday Hindi",
      accent: "#b3354b",
      accentDark: "#92283a",
      accentLight: "#fff0f2",
      language: "hi-IN",
      heroTitle: "Get around town with Hindi",
      heroDescription: "Ask an auto driver about the fare and find your destination.",
      heroIcon: "🛺",
      heroPlant: "🌳",
      unit: "Unit 1 · Everyday conversations",
      phraseTitle: "Getting around",
      phrase: "बस स्टॉप कहाँ है?",
      translation: "Where is the bus stop?",
      tipTitle: "A handy Hindi question",
      tip: "Use this phrase when you need directions to public transport.",
      lessons: [
        {
          title: "Ask for the bus stop",
          description: "Find the right stop when you are in a new neighborhood.",
          icon: "🚌",
          question: question("You need directions to the bus stop.", "Choose “Where is the bus stop?”", ["बस स्टॉप कहाँ है?", "यह कितने का है?", "मुझे पानी चाहिए।"], 0, "Correct! “बस स्टॉप कहाँ है?” means “Where is the bus stop?”")
        },
        {
          title: "Buy fruit at a shop",
          description: "Ask a shopkeeper how much an item costs.",
          icon: "🍎",
          question: question("You want to know the price of an apple.", "Choose “How much is this?”", ["आपका नाम क्या है?", "यह कितने का है?", "बस कब आएगी?"], 1, "Right! “यह कितने का है?” asks how much something costs.")
        },
        {
          title: "Order water politely",
          description: "Make a simple, polite request at a café.",
          icon: "🥤",
          question: question("You are thirsty at a café.", "Choose “Please give me a bottle of water.”", ["कृपया एक बोतल पानी दीजिए।", "मुझे रास्ता बताइए।", "धन्यवाद, फिर मिलेंगे।"], 0, "Great! “कृपया” means “please,” and “पानी” means “water.”")
        }
      ],
      words: [
        { term: "नमस्ते", meaning: "Hello", example: "नमस्ते, आप कैसे हैं?", category: "Greetings" },
        { term: "धन्यवाद", meaning: "Thank you", example: "आपकी मदद के लिए धन्यवाद।", category: "Polite phrases" },
        { term: "कहाँ है?", meaning: "Where is it?", example: "बस स्टॉप कहाँ है?", category: "Getting around" },
        { term: "पानी", meaning: "Water", example: "कृपया पानी दीजिए।", category: "Everyday words" },
        { term: "कितने का है?", meaning: "How much does it cost?", example: "यह कितने का है?", category: "At the shop" },
        { term: "कृपया", meaning: "Please", example: "कृपया धीरे बोलिए।", category: "Polite phrases" }
      ]
    },
    english: {
      name: "English",
      icon: "EN",
      subtitle: "Everyday English",
      accent: "#286f9e",
      accentDark: "#1d587e",
      accentLight: "#eaf5fb",
      language: "en-IN",
      heroTitle: "Communicate clearly every day",
      heroDescription: "Practice polite questions and clear messages for school and work.",
      heroIcon: "💬",
      heroPlant: "📖",
      unit: "Unit 1 · Clear communication",
      phraseTitle: "Polite and clear",
      phrase: "Could you please help me?",
      translation: "A polite way to ask for help.",
      tipTitle: "Sound polite",
      tip: "“Could you please…?” is a friendly way to make a request.",
      lessons: [
        {
          title: "Ask for directions politely",
          description: "Ask someone for help finding a place.",
          icon: "🗺️",
          question: question("You are looking for the library.", "Which question sounds polite and clear?", ["Library where?", "Could you please tell me how to get to the library?", "You tell library."], 1, "Correct! “Could you please tell me…” is a polite request.")
        },
        {
          title: "Write a clear message",
          description: "Use punctuation to make a question easy to understand.",
          icon: "✉️",
          question: question("You are messaging your teacher about homework.", "Which sentence is punctuated correctly?", ["When is the homework due?", "When is the homework due.", "when is the homework due"], 0, "Right! A direct question begins with a capital letter and ends with a question mark.")
        },
        {
          title: "Use “there is” and “there are”",
          description: "Describe what's available at your local shop.",
          icon: "🛒",
          question: question("You see three fresh apples in a basket.", "Complete: “_____ three apples in the basket.”", ["There is", "There are", "It are"], 1, "Exactly! Use “there are” with plural nouns like apples.")
        }
      ],
      words: [
        { term: "Could you please…?", meaning: "A polite way to make a request", example: "Could you please show me the way?", category: "Polite phrases" },
        { term: "directions", meaning: "Instructions for how to get somewhere", example: "Can you give me directions to the station?", category: "Getting around" },
        { term: "available", meaning: "Ready to be used or bought", example: "Is this size available?", category: "Useful words" },
        { term: "receipt", meaning: "A note showing what you paid for", example: "May I have a receipt, please?", category: "At the shop" },
        { term: "appointment", meaning: "An arranged time to meet someone", example: "I have a doctor's appointment at ten.", category: "Everyday words" },
        { term: "borrow", meaning: "To use something and return it later", example: "May I borrow your pen?", category: "Useful words" }
      ]
    },
    maths: {
      name: "Maths",
      icon: "∑",
      subtitle: "Maths in everyday life",
      accent: "#6553aa",
      accentDark: "#4d3e8b",
      accentLight: "#f0edfc",
      language: "en-IN",
      heroTitle: "Use maths while shopping",
      heroDescription: "Add prices, compare discounts, and check your change at the store.",
      heroIcon: "🧮",
      heroPlant: "📐",
      unit: "Unit 1 · Money & measurement",
      phraseTitle: "Shopping calculation",
      phrase: "2 kg × ₹80 = ₹160",
      translation: "Two kilograms at ₹80 per kilogram costs ₹160.",
      tipTitle: "Estimate before you pay",
      tip: "A quick estimate helps you spot mistakes in a bill or change.",
      lessons: [
        {
          title: "Find the total at the market",
          description: "Multiply a price per kilogram by the amount you buy.",
          icon: "🛍️",
          question: question("Apples cost ₹80 per kilogram. You buy 2 kilograms.", "What is the total cost?", ["₹160", "₹120", "₹80"], 0, "Correct! 2 × ₹80 = ₹160.")
        },
        {
          title: "Work out a sale discount",
          description: "Calculate the sale price after a discount.",
          icon: "🏷️",
          question: question("A ₹500 school bag is discounted by ₹50.", "What is the sale price?", ["₹550", "₹450", "₹50"], 1, "Right! ₹500 − ₹50 = ₹450.")
        },
        {
          title: "Check your change",
          description: "Subtract the bill from the amount you paid.",
          icon: "💵",
          question: question("Your bill is ₹135. You pay with ₹200.", "How much change should you get?", ["₹75", "₹65", "₹55"], 1, "Exactly! ₹200 − ₹135 = ₹65.")
        }
      ],
      words: [
        { term: "total", meaning: "The complete amount after adding", example: "Add each item to find the total.", category: "Shopping maths" },
        { term: "discount", meaning: "An amount taken off the original price", example: "A ₹50 discount on a ₹500 bag.", category: "Money" },
        { term: "change", meaning: "Money returned after you pay", example: "₹200 − ₹135 = ₹65 change.", category: "Money" },
        { term: "estimate", meaning: "A close answer found by rounding", example: "Estimate the bill before checkout.", category: "Number skills" },
        { term: "kilogram", meaning: "A unit used to measure mass", example: "Buy one kilogram of rice.", category: "Measurement" },
        { term: "budget", meaning: "A plan for how much money to spend", example: "Stay within your weekly budget.", category: "Money" }
      ]
    },
    evs: {
      name: "EVS",
      icon: "🌱",
      subtitle: "Environmental studies",
      accent: "#428331",
      accentDark: "#316725",
      accentLight: "#edf7e9",
      language: "en-IN",
      heroTitle: "Make your home greener",
      heroDescription: "Practice small habits that save water and keep your neighborhood clean.",
      heroIcon: "🌍",
      heroPlant: "🌿",
      unit: "Unit 1 · Home & environment",
      phraseTitle: "A greener habit",
      phrase: "Turn off the tap while brushing.",
      translation: "This simple habit helps save clean water.",
      tipTitle: "Small actions add up",
      tip: "Saving water and sorting waste at home can help the whole community.",
      lessons: [
        {
          title: "Sort household waste",
          description: "Decide what belongs in a wet-waste or compost bin.",
          icon: "♻️",
          question: question("You are cleaning vegetables after lunch.", "Where should the vegetable peels go?", ["Wet or compostable waste", "Dry plastic waste", "The street drain"], 0, "Correct! Vegetable peels are organic and can be composted.")
        },
        {
          title: "Save water at home",
          description: "Choose an easy way to reduce water use.",
          icon: "💧",
          question: question("You are brushing your teeth.", "Which habit saves water?", ["Keep the tap running", "Turn off the tap while brushing", "Use a new glass of water every minute"], 1, "Right! Turning off the tap avoids wasting clean water.")
        },
        {
          title: "Care for a young plant",
          description: "Give a seedling what it needs to grow.",
          icon: "🪴",
          question: question("You planted a seed in a pot.", "What helps most seeds grow well?", ["Soil, water, and sunlight", "Plastic wrap and no air", "Only more soil every day"], 0, "Exactly! Most plants need suitable soil, water, and sunlight.")
        }
      ],
      words: [
        { term: "compost", meaning: "Natural material made from decayed organic waste", example: "Fruit peels can become compost.", category: "Waste & recycling" },
        { term: "conserve", meaning: "Use carefully and avoid waste", example: "Conserve water by fixing a leaking tap.", category: "Natural resources" },
        { term: "habitat", meaning: "The natural home of a plant or animal", example: "A pond is a habitat for frogs.", category: "Living things" },
        { term: "recycle", meaning: "Process used material so it can be used again", example: "Recycle clean paper and cardboard.", category: "Waste & recycling" },
        { term: "seedling", meaning: "A young plant that has just started to grow", example: "Water the seedling gently.", category: "Plants" },
        { term: "pollution", meaning: "Harmful waste or substances in the environment", example: "Litter can pollute a local stream.", category: "Environment" }
      ]
    },
    social: {
      name: "Social Studies",
      icon: "🌍",
      subtitle: "People, places & community",
      accent: "#99601d",
      accentDark: "#774814",
      accentLight: "#fff4e5",
      language: "en-IN",
      heroTitle: "Explore your community",
      heroDescription: "Read a simple map and learn who helps keep your neighborhood running.",
      heroIcon: "🗺️",
      heroPlant: "🏘️",
      unit: "Unit 1 · Maps & community",
      phraseTitle: "Map-reading reminder",
      phrase: "The top of most maps points north.",
      translation: "Check the compass symbol before planning a route.",
      tipTitle: "Look for the map key",
      tip: "Map symbols and the key help you find roads, parks, schools, and services.",
      lessons: [
        {
          title: "Read a neighborhood map",
          description: "Use a compass direction to find a nearby place.",
          icon: "🗺️",
          question: question("A map's compass shows north at the top. The park is east of your school.", "Which way should you travel from school to the park?", ["Left / west", "Right / east", "South"], 1, "Correct! East is to the right when north is at the top of a standard map.")
        },
        {
          title: "Know your local services",
          description: "Match a community need with the right local service.",
          icon: "🏫",
          question: question("The streetlight outside your home is broken.", "Which local service is most likely to help?", ["The local municipality", "A grocery shop", "A sports team"], 0, "Right! Local municipal services often maintain public streetlights.")
        },
        {
          title: "Be a responsible citizen",
          description: "Choose a safe, considerate action in public spaces.",
          icon: "🚸",
          question: question("You need to cross a busy road near school.", "What is the safest choice?", ["Cross between parked cars", "Use the marked crossing and check traffic", "Follow a stranger across"], 1, "Exactly! Use a marked crossing and check that traffic has stopped.")
        }
      ],
      words: [
        { term: "compass", meaning: "A tool or symbol that shows direction", example: "Use the compass to find north.", category: "Maps" },
        { term: "municipality", meaning: "A local government that manages a town or city", example: "The municipality collects household waste.", category: "Community" },
        { term: "landmark", meaning: "A noticeable place that helps you find your way", example: "Meet beside the clock tower landmark.", category: "Maps" },
        { term: "community", meaning: "People living or working in the same area", example: "Neighbors work together as a community.", category: "People & places" },
        { term: "public service", meaning: "A service provided for people in a community", example: "A public library is a community service.", category: "Community" },
        { term: "direction", meaning: "The way something is facing or moving", example: "The school is north of the park.", category: "Maps" }
      ]
    }
  };

  Object.keys(courses).forEach(function (key) {
    courses[key].completed = new Set();
  });

  var selectedCourseKey = "telugu";
  var currentCourse = courses[selectedCourseKey];
  var lessonModal = document.getElementById("lessonModal");
  var lessonAnswers = document.getElementById("answers");
  var lessonFeedback = document.getElementById("feedback");
  var lessonContinue = document.getElementById("continueButton");
  var quizAnswers = document.getElementById("practiceAnswers");
  var quizContinue = document.getElementById("practiceContinue");
  var vocabularyList = document.getElementById("vocabularyList");
  var lessonIndex = 0;
  var quizIndex = 0;
  var quizScore = 0;
  var lessonEarned = 0;
  var totalXp = 240;
  var dailyXp = 10;
  var toastTimer;
  var soundEnabled = true;
  var activeVocabularyFilter = "all";

  function showToast(message) {
    var toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toast.classList.remove("show"); }, 2400);
  }

  function addXp(amount) {
    totalXp += amount;
    dailyXp = Math.min(20, dailyXp + amount);
    document.getElementById("xpCount").textContent = totalXp;
    document.getElementById("leaderboardXp").textContent = totalXp;
    document.getElementById("goalProgress").textContent = dailyXp;
    document.getElementById("dailyQuest").textContent = dailyXp + " / 20 XP";
    document.getElementById("goalPercent").textContent = Math.round(dailyXp / 20 * 100) + "%";
    document.getElementById("todayBar").style.setProperty("--height", Math.min(76, 18 + dailyXp * 2) + "px");
    var degrees = Math.round(dailyXp / 20 * 360);
    document.querySelector(".goal-ring").style.background =
      "conic-gradient(var(--green) 0deg " + degrees + "deg, #eaf0e7 " + degrees + "deg 360deg)";
  }

  function showPage(pageName) {
    document.querySelectorAll("[data-page-view]").forEach(function (page) {
      page.hidden = page.dataset.pageView !== pageName;
    });
    document.querySelectorAll(".nav-item").forEach(function (item) {
      var isActive = item.dataset.view === pageName;
      item.classList.toggle("active", isActive);
      if (isActive) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
    if (pageName === "lessons") renderLessons();
    if (pageName === "practice") renderQuizQuestion();
    if (pageName === "vocabulary") renderVocabulary();
  }

  function renderPath() {
    var nodes = document.getElementById("pathNodes");
    nodes.replaceChildren();
    currentCourse.lessons.forEach(function (lesson, index) {
      var completed = currentCourse.completed.has(index);
      var wrap = document.createElement("div");
      wrap.className = "node-wrap";
      var node = document.createElement("span");
      node.className = "node" + (completed ? " done" : index === 0 ? " current" : "");
      node.textContent = completed ? "✓" : lesson.icon;
      var label = document.createElement("span");
      label.textContent = lesson.title;
      wrap.append(node, label);
      nodes.appendChild(wrap);
    });
    var review = document.createElement("div");
    review.className = "node-wrap";
    var reviewNode = document.createElement("span");
    reviewNode.className = "node";
    reviewNode.textContent = "🏆";
    var reviewLabel = document.createElement("span");
    reviewLabel.textContent = "Review";
    review.append(reviewNode, reviewLabel);
    nodes.appendChild(review);

    var completedCount = currentCourse.completed.size;
    document.getElementById("pathProgress").style.width =
      (22 + Math.round(completedCount / currentCourse.lessons.length * 62)) + "%";
    document.getElementById("lessonQuest").textContent = completedCount + " / " + currentCourse.lessons.length + " lessons";
  }

  function renderCourse() {
    var firstLesson = currentCourse.lessons[0];
    document.documentElement.style.setProperty("--green", currentCourse.accent);
    document.documentElement.style.setProperty("--green-dark", currentCourse.accentDark);
    document.documentElement.style.setProperty("--green-light", currentCourse.accentLight);
    document.getElementById("courseIcon").textContent = currentCourse.icon;
    document.getElementById("courseSubtitle").textContent = currentCourse.subtitle;
    document.getElementById("profileCourse").textContent = currentCourse.name + " · Foundations";
    document.getElementById("heroTitle").textContent = currentCourse.heroTitle;
    document.getElementById("heroDescription").textContent = currentCourse.heroDescription;
    document.getElementById("heroIcon").textContent = currentCourse.heroIcon;
    document.getElementById("heroPlant").textContent = currentCourse.heroPlant;
    document.getElementById("lessonIcon").textContent = firstLesson.icon;
    document.getElementById("lessonTitle").textContent = firstLesson.title;
    document.getElementById("lessonDescription").textContent = firstLesson.description;
    document.getElementById("lessonUnit").textContent = currentCourse.name.toUpperCase();
    document.getElementById("pathHeading").textContent = "Your " + currentCourse.name + " path";
    document.getElementById("unitTitle").textContent = currentCourse.unit;
    document.getElementById("lessonsHeading").innerHTML =
      currentCourse.name + " lessons <span aria-hidden=\"true\">📘</span>";
    document.getElementById("lessonsDescription").textContent =
      "Practical " + currentCourse.name + " lessons built around everyday situations.";
    document.getElementById("quizHeading").innerHTML =
      currentCourse.name + " quizzes <span aria-hidden=\"true\">🎯</span>";
    document.getElementById("quizDescription").textContent =
      "Use what you have learned in everyday " + currentCourse.name + " situations.";
    document.getElementById("vocabularyHeading").innerHTML =
      currentCourse.name + " vocabulary <span aria-hidden=\"true\">📚</span>";
    document.getElementById("vocabularyDescription").textContent =
      "Review useful " + currentCourse.name + " words and key ideas, then mark the ones you know.";
    document.getElementById("phraseHeading").textContent = currentCourse.phraseTitle;
    document.getElementById("phraseCategory").textContent = currentCourse.name + " · " + currentCourse.phraseTitle;
    document.getElementById("dailyPhrase").textContent = currentCourse.phrase;
    document.getElementById("dailyPhraseTranslation").textContent = currentCourse.translation;
    document.getElementById("practiceTipIcon").textContent = currentCourse.heroIcon;
    document.getElementById("practiceTipTitle").textContent = currentCourse.tipTitle;
    document.getElementById("practiceTipDescription").textContent = currentCourse.tip;
    document.getElementById("practicePhrase").textContent = currentCourse.phrase;
    document.getElementById("practiceTranslation").textContent = currentCourse.translation;
    renderPath();
    renderLessons();
    resetQuiz();
    renderVocabulary();
  }

  function renderLessons() {
    var list = document.getElementById("lessonsList");
    list.replaceChildren();
    currentCourse.lessons.forEach(function (lesson, index) {
      var completed = currentCourse.completed.has(index);
      var card = document.createElement("article");
      card.className = "catalog-card";
      var top = document.createElement("div");
      top.className = "catalog-card-top";
      var icon = document.createElement("span");
      icon.className = "catalog-icon";
      icon.textContent = lesson.icon;
      var duration = document.createElement("span");
      duration.className = "catalog-duration";
      duration.textContent = "5 min · +10 XP";
      top.append(icon, duration);
      var title = document.createElement("h2");
      title.textContent = lesson.title;
      var description = document.createElement("p");
      description.textContent = lesson.description;
      var action = document.createElement("button");
      action.className = completed ? "secondary-button" : "primary-button";
      action.type = "button";
      action.textContent = completed ? "✓ REVIEW LESSON" : "START LESSON →";
      action.addEventListener("click", function () { openLesson(index); });
      card.append(top, title, description, action);
      list.appendChild(card);
    });
    document.getElementById("lessonTitle").textContent = currentCourse.lessons[0].title;
  }

  function showLessonQuestion() {
    var lesson = currentCourse.lessons[lessonIndex];
    var item = lesson.question;
    document.getElementById("lessonContext").textContent = currentCourse.icon + " · " + lesson.title;
    document.getElementById("questionTitle").textContent = item.title;
    document.getElementById("lessonPromptLabel").textContent = "Real-life challenge";
    var prompt = document.querySelector(".prompt");
    prompt.replaceChildren();
    var label = document.createElement("span");
    label.id = "lessonPromptLabel";
    label.textContent = "Real-life challenge";
    prompt.append(label, document.createTextNode(item.prompt));
    document.getElementById("modalProgress").style.width = "35%";
    document.getElementById("earnedXp").textContent = lessonEarned;
    lessonFeedback.textContent = "";
    lessonFeedback.className = "feedback";
    lessonContinue.disabled = true;
    lessonContinue.textContent = "CHECK ANSWER";
    lessonAnswers.replaceChildren();

    item.answers.forEach(function (answer, index) {
      var button = document.createElement("button");
      button.className = "answer";
      button.type = "button";
      button.textContent = answer;
      button.addEventListener("click", function () {
        if (button.disabled) return;
        Array.prototype.forEach.call(lessonAnswers.children, function (option) { option.disabled = true; });
        if (index === item.correct) {
          button.classList.add("correct");
          lessonFeedback.textContent = item.explanation;
          lessonFeedback.classList.add("good");
          lessonEarned = 10;
          document.getElementById("earnedXp").textContent = lessonEarned;
        } else {
          button.classList.add("incorrect");
          lessonAnswers.children[item.correct].classList.add("correct");
          lessonFeedback.textContent = "Not quite. The highlighted answer is correct. Give it another try next time.";
          lessonFeedback.classList.add("bad");
        }
        document.getElementById("modalProgress").style.width = "100%";
        lessonContinue.disabled = false;
        lessonContinue.textContent = "COMPLETE LESSON";
      });
      lessonAnswers.appendChild(button);
    });
  }

  function openLesson(index) {
    lessonIndex = index;
    lessonEarned = 0;
    lessonModal.classList.add("open");
    showLessonQuestion();
    document.getElementById("closeLesson").focus();
  }

  function finishLesson() {
    var alreadyCompleted = currentCourse.completed.has(lessonIndex);
    currentCourse.completed.add(lessonIndex);
    if (!alreadyCompleted) addXp(lessonEarned);
    renderPath();
    renderLessons();
    lessonModal.classList.remove("open");
    showToast(alreadyCompleted
      ? "Lesson reviewed. Keep practicing! 📘"
      : "Lesson complete! +" + lessonEarned + " XP. Great job! 🎉");
  }

  function renderQuizQuestion() {
    var item = currentCourse.lessons[quizIndex].question;
    document.getElementById("quizUnit").textContent =
      currentCourse.name + " quiz · " + (quizIndex + 1) + " of " + currentCourse.lessons.length;
    document.getElementById("practiceTitle").textContent = item.title;
    document.getElementById("practiceSituation").textContent = currentCourse.lessons[quizIndex].description;
    document.getElementById("practicePrompt").textContent = item.prompt;
    document.getElementById("practiceStep").textContent =
      "Question " + (quizIndex + 1) + " of " + currentCourse.lessons.length;
    document.getElementById("practiceProgress").style.width =
      (quizIndex / currentCourse.lessons.length * 100) + "%";
    var feedback = document.getElementById("practiceFeedback");
    feedback.textContent = "";
    feedback.className = "practice-feedback";
    quizContinue.disabled = true;
    quizContinue.textContent = "CHECK ANSWER";
    quizAnswers.replaceChildren();

    item.answers.forEach(function (answer, index) {
      var button = document.createElement("button");
      button.className = "practice-answer";
      button.type = "button";
      button.textContent = answer;
      button.addEventListener("click", function () {
        if (button.disabled) return;
        Array.prototype.forEach.call(quizAnswers.children, function (option) { option.disabled = true; });
        if (index === item.correct) {
          button.classList.add("correct");
          feedback.textContent = item.explanation;
          feedback.classList.add("good");
          quizScore += 5;
          addXp(5);
        } else {
          button.classList.add("incorrect");
          quizAnswers.children[item.correct].classList.add("correct");
          feedback.textContent = "Not quite. The highlighted answer is correct—review the lesson and try again.";
          feedback.classList.add("bad");
        }
        document.getElementById("practiceProgress").style.width =
          ((quizIndex + 1) / currentCourse.lessons.length * 100) + "%";
        quizContinue.disabled = false;
        quizContinue.textContent = quizIndex === currentCourse.lessons.length - 1
          ? "FINISH QUIZ"
          : "NEXT QUESTION";
      });
      quizAnswers.appendChild(button);
    });
  }

  function resetQuiz() {
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();
  }

  function advanceQuiz() {
    if (quizContinue.disabled) return;
    if (quizIndex === currentCourse.lessons.length - 1) {
      showToast("Quiz complete! You earned " + quizScore + " XP. 🎉");
      resetQuiz();
    } else {
      quizIndex += 1;
      renderQuizQuestion();
    }
  }

  function speakText(text) {
    if (!soundEnabled) {
      showToast("Turn sound on to hear the reading.");
      return;
    }
    if (!("speechSynthesis" in window)) {
      showToast("Audio playback isn't available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentCourse.language;
    window.speechSynthesis.speak(utterance);
  }

  function renderVocabulary() {
    var search = document.getElementById("vocabularySearch").value.trim().toLocaleLowerCase();
    var filteredWords = currentCourse.words.filter(function (word) {
      var isKnown = currentCourse.known.has(word.term);
      var matchesFilter = activeVocabularyFilter === "all" ||
        (activeVocabularyFilter === "known" ? isKnown : !isKnown);
      var searchable = (word.term + " " + word.meaning + " " + word.example + " " + word.category)
        .toLocaleLowerCase();
      return matchesFilter && searchable.includes(search);
    });

    document.getElementById("vocabularyCount").textContent =
      filteredWords.length + (filteredWords.length === 1 ? " item" : " items");
    document.getElementById("knownCount").textContent = currentCourse.known.size + " mastered";
    vocabularyList.replaceChildren();
    if (filteredWords.length === 0) {
      var empty = document.createElement("p");
      empty.className = "vocabulary-empty";
      empty.textContent = "No matching items. Try another search or filter.";
      vocabularyList.appendChild(empty);
      return;
    }

    filteredWords.forEach(function (word) {
      var isKnown = currentCourse.known.has(word.term);
      var row = document.createElement("article");
      row.className = "vocabulary-item" + (isKnown ? " mastered" : "");
      var copy = document.createElement("div");
      copy.className = "vocabulary-word-copy";
      var category = document.createElement("span");
      category.className = "vocabulary-category";
      category.textContent = word.category;
      var term = document.createElement("strong");
      term.className = "vocabulary-spanish";
      term.textContent = word.term;
      var meaning = document.createElement("span");
      meaning.className = "vocabulary-english";
      meaning.textContent = word.meaning;
      var example = document.createElement("small");
      example.className = "vocabulary-example";
      example.textContent = word.example;
      copy.append(category, term, meaning, example);

      var actions = document.createElement("div");
      actions.className = "vocabulary-actions";
      var listen = document.createElement("button");
      listen.className = "secondary-button";
      listen.type = "button";
      listen.textContent = "🔊 Listen";
      listen.setAttribute("aria-label", "Listen to " + word.term);
      listen.addEventListener("click", function () { speakText(word.term); });
      var markKnown = document.createElement("button");
      markKnown.className = "mark-known-button";
      markKnown.type = "button";
      markKnown.textContent = isKnown ? "✓ Learned" : "Mark learned";
      markKnown.setAttribute("aria-pressed", String(isKnown));
      markKnown.addEventListener("click", function () {
        if (currentCourse.known.has(word.term)) currentCourse.known.delete(word.term);
        else currentCourse.known.add(word.term);
        renderVocabulary();
      });
      actions.append(listen, markKnown);
      row.append(copy, actions);
      vocabularyList.appendChild(row);
    });
  }

  function switchCourse(courseKey) {
    if (!courses[courseKey]) return;
    selectedCourseKey = courseKey;
    currentCourse = courses[courseKey];
    activeVocabularyFilter = "all";
    document.getElementById("vocabularySearch").value = "";
    document.querySelectorAll("[data-vocabulary-filter]").forEach(function (button) {
      var active = button.dataset.vocabularyFilter === "all";
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderCourse();
  }

  function signIn(name) {
    var displayName = name.trim() || "Learner";
    document.getElementById("profileName").textContent = displayName;
    document.getElementById("greetingName").textContent = displayName.split(/\s+/)[0];
    document.getElementById("leaderboardName").textContent = displayName;
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginError").textContent = "";
    document.body.classList.add("authenticated");
    showPage("learning");
  }

  function signOut() {
    document.body.classList.remove("authenticated");
    document.getElementById("loginForm").reset();
    document.getElementById("loginError").textContent = "";
    showPage("learning");
  }

  Object.keys(courses).forEach(function (key) {
    courses[key].known = new Set();
  });

  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;
    if (!email || password.length < 4) {
      document.getElementById("loginError").textContent =
        "Enter a valid email address and a password with at least 4 characters.";
      return;
    }
    var username = email.split("@")[0].replace(/[._-]+/g, " ");
    var displayName = username.replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
    signIn(displayName);
  });
  document.getElementById("demoSignIn").addEventListener("click", function () {
    signIn("Alex Morgan");
  });
  document.getElementById("logoutButton").addEventListener("click", signOut);

  document.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("click", function () { showPage(item.dataset.view); });
  });
  document.querySelector(".app .brand").addEventListener("click", function (event) {
    event.preventDefault();
    showPage("learning");
  });
  document.getElementById("courseSelect").addEventListener("change", function (event) {
    switchCourse(event.target.value);
  });

  document.getElementById("startLesson").addEventListener("click", function () { openLesson(0); });
  document.getElementById("practiceStartLesson").addEventListener("click", function () { openLesson(0); });
  document.getElementById("closeLesson").addEventListener("click", function () {
    lessonModal.classList.remove("open");
  });
  lessonModal.addEventListener("click", function (event) {
    if (event.target === lessonModal) lessonModal.classList.remove("open");
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") lessonModal.classList.remove("open");
  });
  lessonContinue.addEventListener("click", function () {
    if (lessonContinue.disabled) return;
    finishLesson();
  });

  quizContinue.addEventListener("click", advanceQuiz);
  document.getElementById("practiceSpeak").addEventListener("click", function () {
    speakText(currentCourse.phrase);
  });
  document.getElementById("vocabularySearch").addEventListener("input", renderVocabulary);
  document.querySelectorAll("[data-vocabulary-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeVocabularyFilter = button.dataset.vocabularyFilter;
      document.querySelectorAll("[data-vocabulary-filter]").forEach(function (filterButton) {
        var active = filterButton === button;
        filterButton.classList.toggle("active", active);
        filterButton.setAttribute("aria-pressed", String(active));
      });
      renderVocabulary();
    });
  });
  document.getElementById("reviewButton").addEventListener("click", function () {
    showPage("vocabulary");
    document.getElementById("vocabularySearch").focus();
  });
  document.getElementById("pathButton").addEventListener("click", function () {
    showPage("lessons");
  });
  document.getElementById("speakButton").addEventListener("click", function () {
    speakText(currentCourse.phrase);
  });
  document.getElementById("soundToggle").addEventListener("click", function (event) {
    soundEnabled = !soundEnabled;
    event.currentTarget.textContent = soundEnabled ? "🔊" : "🔇";
    event.currentTarget.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
    showToast(soundEnabled ? "Sound is on." : "Sound is off.");
  });

  renderCourse();
})();
