export const getTrainingData = (option) => {
  switch(option){
    case 'Abuse Detection':
    return {
    description: `Welcome to Abuse: Detection, Reporting and Prevention of Abuse, Suspected Abuse and Alleged Abuse Training`,
    objective:"Learn how to detect, report, and prevent abuse in accordance with 55 PA Code Chapter 6100.",
    icebreaker:"Share a time you stood up for someone or protected someone’s rights.",
    duration: '3 hours',
    wrapup:[

    ],
    topics: [
      {
        title: 'What is abuse?',
        description: [
          "Abuse is the deliberate mistreatment of an individual that causes physical, emotional, orpsychological harm.",
          "Types include: Physical, Emotional, Sexual,Verbal, Neglect, Financial, and Exploitation.",
        ],
        activity: "Match types of abuse to real-life examples."
      },
      {
        title: 'Recognizing the signs of abuse',
        description: [
          "Unexplained bruises, changes in behavior,fearfulness, withdrawn demeanor, or missing belongings.",
          "Behavior or physical symptoms may vary depending on the individual.",
        ],
        activity: "Case study—Identify warning signs in a given scenario."
      },
       {
        title: 'Mandated Reporting Responsibilities',
        description: [
    "ALL staff are mandated reporters under 6100 regulations.",
    "📝You must report any witnessed, suspected, or alleged abuse immediately.",
        ],
        activity:"Role-play reporting a suspected abuse case to your supervisor."
      },
      {
        title: 'How to report abuse?',
        description: [
          "Notify your supervisor, file an incident report,and contact protective services if necessary.",
          "Follow your agency's reporting timeline—usually within 24 hours.",
        ],
        activity:"Fill out a sample abuse incident report based on a provided scenario."
      },
      {
        title: 'Preventing Abuse Before It Happens',
        description: [
          "Create safe, respectful environments.",
          "Empower individuals to speak up and self-advocate.",
        ],
        activity:"List 3 things you can do daily to prevent abuse in your role."
      },
      {
        title: 'What to Do if Abuse is Alleged or Suspected',
        description: [
          "Ensure the person is safe, document facts only, do NOT investigate yourself.",
          "Immediately notify designated personnel per agency protocol.",
        ],
        scenario:"You overhear a staff yelling threats—what steps do you take?"
      },
      {
        title: 'Protecting the Rights of Individuals',
        description: [
          "Everyone has the right to feel safe and free from harm.",
          "Respect, empower, and advocate for those you support.",
        ],
        activity:"Group brainstorm—how can your team promote a no-tolerance culture?"
      },
      {
        title: 'Consequences of Failing to Report',
        description: [
          "Legal consequences, disciplinary action, and harm to individuals.",
          "Reporting is a legal and ethical obligation—not optional.",
        ],
        activity:"Quiz—Is it reportable or not? Test your knowledge."
      },
            {
        title:"Wrap-Up & Commitment to Safety",
        description:["Every staff member plays a role in prevention and protection."],
        activity:"Write a 'Commitment to Zero Abuse' pledge.",
        conclusion:"Q&A and access to resources and hotlines"
      }

    ]
  }
    case 'Person Centered':
return {
    description: `Welcome to Person-Centered Practices Training`,
    objective:"Learn how to apply person-centered principles in daily support under 55 PA Code Chapter 6100.",
    icebreaker:"Share one way you support someone's unique preferences at work.",
    duration: '3 hours',
   

    topics: [
      {
        title: 'What Are Person-Centered Practices?',
        description: [
          "An approach that puts the individual at the center of planning and decision-making.",
          "Focuses on strengths, preferences, choices and goals.",
        ],
        activity: "Describe the difference between person-centered and system-centered thinking."
      },
      {
        title: 'Why It Matters',
        description: [
          "Promotes dignity, independence, and inclusion.",
          "Required by 55 PA Code Chapter 6100 for all services and supports.",
        ],
        scenario: "A support plan is created without input from the individual—what's missing?"
      },
       {
        title: 'Key Principles of Person-Centered Practices',
        description: [
   "Respect and dignity",
   "Individual choice and control",
   "Community inclusion",
   "Strength-based support,"
        ],
        activity:"Match each principle with a real-life example."
      },
      {
        title: 'The Role of the Direct Support Professional',
        description: [
          "Listen actively and advocate for preferences.",
          "Support the person’s goals—not your own assumptions.",
        ],
        scenario:"The individual wants to attend an event you dislike—how do you respond?"
      },
      {
        title: 'Creating Person-Centered Support Plans',
        description: [
          "Use 'important to' and 'important for' as guiding principles.",
          "Incorporate preferences, rituals, routines, and communication styles.",
        ],
        activity:"Build a one-page profile using a sample scenario."
      },
      {
        title: 'Respecting Culture, Identity & Communication',
        description: [
          "Honor diverse backgrounds, beliefs, and ways of expression.",
          "Use preferred names, pronouns, and communication methods.",
        ],
        scenario:"How would you support someone who uses a communication board?"
      },
      {
        title: 'Supporting Choice and Decision-Making',
        description: [
         "Provide options, not orders.",
          "Encourage risk-taking and personal growth."
        ],
        activity:"Offer three support strategies for helping someone make a hard decision."
      },
      {
        title: 'Overcoming System Barriers with Creativity',
        description: [
          "Think beyond checklists and compliance.",
          "Ask: 'How can we make this happen?'"
        ],
        activity:"Rework a 'no' into a person-centered 'yes, with support.'"
      },
            {
        title:"Wrap-Up & Reflection",
        description:["Person-centered practice is about doing with,not for."],
        activity:"Create a person-centered affirmation or daily reminder.",
        conclusion:"Q&A and commitment to meaningful support"
      }

    ]
  }
    case 'Individual Rights':
return {
    description: `Welcome to General Orientation: Individual Rights`,
    objective:"Learn about the rights of individuals receiving services under 55 PA Code Chapter 6100.",
    icebreaker:"What does 'dignity and respect' mean to you in your role?",
    duration: '2 hours',
      
    topics: [
      {
        title: 'What are Individual-Rights?',
        description: [
          "Rights are legal and personal freedoms guaranteed to each person.",
          "Individuals receiving services have the same rights as anyone else.",
        ],
        activity: "Match rights (privacy, choice, dignity) to daily scenarios."
      },
      {
        title: '55 PA Code Chapter 6100: Overview',
        description: [
          "Protects and promotes the health, safety, and rights of individuals with disabilities..",
          "Establishes standards for service providers.",
        ],
        activity: "Quiz—Which of these is a protected right under 6100?"
      },
       {
        title: 'Dignity and Respect',
        description: [
    "Treat every individual as capable, valuable, and worthy of respect.",
    "🚫 Avoid labeling, shouting, or talking down to anyone.,"
        ],
        scenario:"Your coworker uses a nickname someone dislikes—what do you do?"
      },
      {
        title: 'Privacy and Confidentiality',
        description: [
          "Everyone has a right to privacy in their home,hygiene, and conversations.",
          "Discuss only with authorized people."
        ],

      },
      {
        title: 'Freedom of Choice',
        description: [
          "Individuals choose where to live, what to wear, what to eat, and how to spend their time.",
" ISP supports these choices and preferences.",
        ],
        activity:"A person refuses their usual lunch. What do you do?"
      },
      {
        title: 'Right to Be Free from Abuse, Neglect, and Exploitationd',
        description: [
          "Individuals have the right to be safe from harm of any kind.",
          "📣 Mandatory reporting protects vulnerable people."
        ],
        activity:"Discuss a reporting scenario—how should it be handled?"
      },
      {
        title: 'Access to Communication, Voting & Participation',
        description: [
          "Individuals can vote, use phones, attend religious services, and join activities.",
          "Support them in making informed choices.,"
        ],
        activity:"Plan a day of rights-based choices for someone you support."
      },
      {
        title: 'Your Role in Protecting Rights',
        description: [
          "Know the rights and speak up when they’re violated.",
          "Support self-advocacy and informed decision-making.",
        ],
        activity:"Rights violation quiz—What would YOU do?"
      },
       {
        title:"Wrap-Up & Reflection",
        description:["Every interaction is a chance to support someone’s rights."],
        activity:"Final Activity: Write a 'Rights Commitment' you will uphold.",
        conclusion:"Q&A and resource access"
      }

    ]
  }
    case 'Recognizing and Reporting Incident':
    return {
    description: `Welcome to Recognizing and Reporting Incidents`,
    objective:"Learn how to recognize, report, and respond to incidents per 55 PA Code Chapter 6100.",
    icebreaker:"Share an example of a time you had to react quickly in a work or personal setting.",
    duration: '2 hours',
      wrapup:[

    ],
    topics: [
      {
        title: 'What is an Incident?',
        description: [
         "An incident is any event that endangers the health, safety, or rights of an individual.",
"📘 6100 regulations define reportable and non-reportable incidents."
        ],
        activity: "True or False—Guess whether each example qualifies as a reportable incident."
      },
      {
        title: 'Types of Reportable Incidents',
        description: [
        "Abuse or suspected abuse",
        "⚠️ Neglect",
       " 🚨 Injuries requiring medical treatment",
        "🛑 Rights violations",
       " 💊 Medication errors,"
        ],
        activity: "Match the incident type to a real-life example."
      },
       {
        title: 'Recognizing Red Flags',
        description: [
    "Changes in behavior, physical injuries, or emotional distress",
" Listen to what individuals tell you—directly or indirectly"
        ],
        scenario:"You notice a person flinches when a staff walks by—what do you do?"
      },
      {
        title: 'Immediate Actions to Take',
        description: [
        " Ensure the individual's safety first",
        "📞 Notify your supervisor or designated personnel immediately",
        "📋 Document only the facts—no opinions,"
        ],
        activity:"Create a step-by-step flowchart for your agency’s incident response."
      },
      {
        title: 'Completing the Incident Report',
        description: [
      "Include who, what, where, when, and how",
    "📆 Submit reports within required timeframes (usually 24 hours)"
        ],
        activity:"Review and correct a sample incident report"
      },
      {
        title: 'Your Role as a Mandated Reporter',
        description: [
  "All staff are legally required to report suspected or actual abuse or serious incidents",
"⚖️ You can be held accountable for failing to report"
        ],
        scenario:"A coworker downplays a serious fall—how do you handle it?"
      },
      {
        title: 'Why Reporting Matters',
        description: [
       "Ensures accountability and protection for individuals",
      "📈 Helps improve systems, safety, and supports,"
        ],
        activity:"Small group brainstorm—What barriers stop people from reporting, and how can we overcome them?"
      },
      {
        title: 'Consequences of Not Reporting',
        description: [
          "Harm to the individual may continue",

          "⚠️ Legal penalties and job loss",

          "📢 Reporting protects both the person and YOU,"
        ],
        activity:"Case study analysis—how lack of reporting led to serious outcomes"
      },
      {
        title:"Wrap-Up & Reporting Commitment",
        description:["Know your agency protocol and use your voice to protect others"],
        activity:"Write a personal reporting commitment statement",
        conclusion:"Q&A and resource access"
      }

    ]
  }
    default:
      return{};
  }
}

  // Customize data based on option if needed
  