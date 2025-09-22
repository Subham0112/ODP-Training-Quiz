export const OdpgetTrainingData = (option) => {
  switch(option){
    case 'Abuse Detection':
    return {
    description: `Welcome to Abuse: Detection, Reporting and Prevention of Abuse, Suspected Abuse and Alleged Abuse Training`,
    objective:["Learn how to detect, report, and prevent abuse in accordance with 55 PA Code Chapter 6100."],
    icebreaker:"Share a time you stood up for someone or protected someone’s rights.",
    duration: '3 hours',
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
    objective:["Learn how to apply person-centered principles in daily support under 55 PA Code Chapter 6100."],
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
    objective:["Learn about the rights of individuals receiving services under 55 PA Code Chapter 6100."],
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
    objective:["Learn how to recognize, report, and respond to incidents per 55 PA Code Chapter 6100."],
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

  export const HodgetTrainingData = (option) => {
switch(option){
    case 'Abuse, Neglect and Mandated Reporting':
    return {
    description: `Welcome to Abuse, Neglect & Mandated Reporting`,
    objective:[
    "This training will help you identify, prevent, and report abuse and neglect in ODP settings.",
    "Define types of abuse and neglect",
    "Recognize the signs",
    "Understand your legal responsibility",
    "Learn how and when to report"
  ],
    icebreaker:" Why do people sometimes fail to report abuse?",
    duration: '45–60 minutes',
    topics: [
      // {
      //   title: "Training Objectives",
      //   description: [
      //     "Define types of abuse and neglect",
      //     "Recognize the signs",
      //     "Understand your legal responsibility",
      //     "Learn how and when to report",
      //   ],
      //   activity: "Write down one reason why prompt reporting is important.",
      // },
      {
        title: "What is Abuse?",
        description: [
          "Abuse is an act or failure to act that causes harm.",
          "It can be physical, sexual, emotional, verbal, or financial."
        ],
        activity: "Match real-life scenarios with the type of abuse they represent.",
      },
      {
        title: "What is Neglect?",
        description: [
          "Neglect is the failure to provide necessary care, leading to harm or risk.",
          "Can be active (intentional) or passive (unintentional).",
        ],
        activity: "Discussion: What’s the difference between a mistake and neglect?",
      },
      {
        title: "Types of Abuse Defined",
        description: [
          "Physical – hitting, pushing",
          "Emotional – insults, threats",
          "Sexual – inappropriate touching, coercion",
          "Verbal – yelling, name-calling",
          "Financial – theft, fraud",
        ],
        activity: "Create flashcards showing each type with an example.",
      },
      {
        title: "Signs and Symptoms",
        description: [
          "Bruises, burns, fearfulness, withdrawal",
          "Changes in mood or behavior",
          "Unexplained injuries or regression",
          "Fear of certain people or places",
        ],
        activity: "Role-play: React to a staff describing signs of abuse and what to do next.",
      },
      {
        title: "Who Are Mandated Reporters?",
        description: [
          "All staff supporting individuals through ODP are mandated reporters.",
          "You are legally required to report suspected abuse/neglect immediately.",
        ],
        activity: "Quiz: Who must you notify when you suspect abuse?",
      },
      {
        title: "How to Report",
        description: [
          "Call Protective Services or ChildLine",
          "Submit required documentation",
          "Notify supervisor and follow agency protocol",
          "Report to HCSIS/EIM when applicable",
        ],
        activity: "Walk through a mock reporting form in small groups.",
      },
      {
        title: "What Happens After a Report?",
        description: [
          "Protective services investigates",
          "Individual’s safety is ensured",
          "You may be contacted for follow-up",
          "Confidentiality is maintained",
        ],
        activity: "Scenario: What should you do if nothing seems to happen after a report?",
      },
      {
        title: "Legal Consequences for Failing to Report",
        description: [
          "Loss of job",
          "Legal penalties or charges",
          "Harm to individuals",
        ],
        activity: "Case Study: A staff didn’t report for 3 days. What should have happened?",
      },
      {
        title: "Creating a Culture of Safety",
        description: [
          "Speak up when you see something",
          "Support each other in doing the right thing",
          "Believe and protect individuals at all costs",
        ],
        activity: "Make a personal pledge to speak up and report abuse.",
      },
      {
        title: "Wrap-Up and Commitment",
        description: [
          "You are the frontline of protection.",
          "Know the signs. Report immediately. Support recovery.",
        ],
        activity: "Complete your quiz and sign your reporting acknowledgment.",
      },

    ]
  }
    case 'Cultural Competency and Disability Awareness':
return {
    description: `Welcome to Cultural Competency & Disability Awareness Training`,
    objective:["This training builds your ability to respectfully support individuals from diverse cultural backgrounds and with various abilities.",
 "Define cultural competence and disability awareness",
          "Explore bias, values, and identity",
          "Improve communication across cultures",
          "Support inclusion and respect in service delivery",
    ],
    icebreaker:"Share a time you learned something new from someone different from you.",
    duration: '45-60 minutes',
    topics: [
      {
        title: "What Is Culture?",
        description: [
          "Culture is a set of shared values, beliefs, and practices passed through generations.",
          "Includes: Language, religion, customs, family roles, gender norms, food, and more.",
        ],
        activity: "Brainstorm: What cultures do you encounter in your work?",
      },
      {
        title: "Understanding Disability as a Cultural Identity",
        description: [
          "Disability can be both a medical condition and a cultural identity.",
          "Many people embrace their disability as part of who they are.",
          "Avoid ‘pity’—focus on empowerment.",
        ],
        activity: "Scenario: How would you talk to someone who identifies strongly with their disability community?",
      },
      {
        title: "Why Cultural Competence Matters in ODP",
        description: [
          "Prevents misunderstandings",
          "Builds trust and comfort",
          "Increases quality of care",
          "Promotes inclusive and person-centered support",
        ],
        activity: "Case study: A family requests accommodations based on religious values. How do you respond?",
      },
      {
        title: "Bias & Assumptions",
        description: [
          "We all have biases. Cultural competence is recognizing and interrupting them.",
          "Assumptions = fast judgments",
          "Bias = internal favoring or disfavoring",
        ],
        activity: "Reflect on a time you assumed something about someone and were wrong.",
      },
      {
        title: "Disability Etiquette & Respectful Language",
        description: [
          "Use person-first language (e.g., 'person with autism') unless told otherwise",
          "Respect autonomy",
          "Don’t speak louder or slower unless asked",
          "Ask before helping",
        ],
        activity: "Game: Rephrase these outdated terms using respectful alternatives.",
      },
      {
        title: "Inclusive Communication Strategies",
        description: [
          "Use plain language",
          "Offer materials in multiple formats",
          "Be mindful of tone and nonverbal cues",
          "Validate cultural norms during conversations",
        ],
        activity: "Role-play a conversation where cultural misunderstanding is gently resolved.",
      },
      {
        title: "Supporting Cultural and Disability Identity",
        description: [
          "Celebrate holidays and traditions when appropriate",
          "Respect dietary needs, dress, religious items",
          "Include personal preferences in the ISP",
          "Ask, don’t assume",
        ],
        activity: "Create a list of inclusive supports to add to your service plans.",
      },
      {
        title: "How to Handle Cultural Conflict or Misunderstanding",
        description: [
          "Stay curious, not judgmental",
          "Ask open-ended questions",
          "Apologize if you offend",
          "Learn and adapt your approach",
        ],
        activity: "Pair up: Practice de-escalating a misunderstanding with empathy.",
      },
      {
        title: "Building Inclusive Environments",
        description: [
          "Diverse teams reflect our communities",
          "Representation in visuals, food, music, policies",
          "Listen deeply and empower all voices",
        ],
        activity: "Design a flyer or bulletin board celebrating diversity and inclusion.",
      },
      {
        title: "Wrap-Up and Commitment",
        description: [
          "Cultural humility and disability awareness are lifelong practices.",
          "Thank you for being open and willing to learn for the good of those we serve.",
        ],
        activity: "Complete your quiz and write one change you’ll make after today.",
      },

    ]
  }
  case 'De-escalation and Behavioral Support Techniques':
    return{
      description: `Welcome to De-escalation & Behavioral Support Training`,
    objective:["Learn how to recognize, prevent, and respond to challenging behaviors while promoting dignity and safety.",
      "Understand behavior as communication",
          "Learn early warning signs of escalation",
          "Apply proactive strategies",
          "Practice de-escalation techniques",
          "Ensure safety and recovery",
    ],
    icebreaker:"What’s one positive way you’ve helped someone through a tough moment?",
    duration: '45-60 minutes',
    topics: [
      {
        title: "Understanding Behavior as Communication",
        description: [
          "All behavior has meaning. It’s a response to needs, emotions, or environmental stressors.",
          "Our job: Understand the 'why' behind the behavior—not just stop it.",
        ],
        activity: "Group brainstorm: What are common needs that cause challenging behavior?",
      },
      {
        title: "Stages of Escalation",
        description: [
          "1. Calm",
          "2. Trigger",
          "3. Agitation",
          "4. Acceleration",
          "5. Peak",
          "6. De-escalation",
          "7. Recovery",
          "Each stage requires a different support approach.",
        ],
        activity: "Match intervention strategies to the appropriate stage of escalation.",
      },
      {
        title: "Proactive Strategies to Prevent Escalation",
        description: [
          "Know individual preferences and triggers",
          "Offer choices and routines",
          "Use positive reinforcement",
          "Reduce environmental stress",
          "Build strong relationships",
        ],
        activity: "Scenario activity: Create a proactive plan for a fictional person with sensory sensitivities.",
      },
      {
        title: "Verbal De-escalation Techniques",
        description: [
          "Use a calm, soft tone",
          "Offer choices",
          "Validate feelings (e.g., 'I see this is hard')",
          "Redirect, don't argue",
          "Give time and space when needed",
        ],
        activity: "Role-play: Practice responding to an escalating situation using calm language.",
      },
      {
        title: "Nonverbal De-escalation Techniques",
        description: [
          "Open body posture",
          "Non-threatening stance",
          "Neutral facial expressions",
          "Maintain personal space",
          "Be aware of your energy",
        ],
        activity: "Demonstrate and discuss how your body language can either calm or escalate a situation.",
      },
      {
        title: "Handling Peak Behavior Safely",
        description: [
          "Prioritize safety for all",
          "Remove others if needed",
          "Avoid physical intervention unless trained and as a last resort",
          "Use minimal, safe intervention per policy",
        ],
        activity: "Debrief a scenario where someone needed space and staff responded effectively.",
      },
      {
        title: "Post-Incident Support & Recovery",
        description: [
          "Check on everyone’s well-being",
          "Reassure and support the person involved",
          "Debrief with the team",
          "Update behavior plan if needed",
          "Document factually",
        ],
        activity: "Design a debrief checklist to use after behavioral incidents.",
      },
      {
        title: "Creating a Supportive Environment",
        description: [
          "Be consistent and compassionate",
          "Offer structure with flexibility",
          "Foster connection and trust",
          "Support self-regulation and independence",
        ],
        activity: "Team project: Develop a list of 'positive climate' practices for your setting.",
      },
      {
        title: "Wrap-Up and Commitment",
        description: [
          "Thank you for helping people feel safe, understood, and respected—even in moments of distress. You make a difference.",
        ],
        activity: "Complete your quiz and reflect on one new strategy you’ll use.",
      },

    ]
    }
    case 'CPR and First Aid':
      return{
          description: `Welcome to CPR & First Aid Training`,
    objective:["To Learn how to respond to emergencies and save lives with basic CPR and First Aid skills.",
                "Understand the purpose of CPR and First Aid",
          "Learn how to perform basic CPR",
          "Respond to common first aid situations",
          "Know when to seek advanced medical care",
    ],
    icebreaker:"Have you ever had to respond in a medical emergency? What did you do?",
    duration: '45-60 minutes',
    topics: [
      {
        title: "What is CPR?",
        description: [
          "Cardiopulmonary Resuscitation (CPR) helps maintain blood flow and oxygen to the brain and vital organs when the heart stops.",
          "Key components:",
          "• Chest compressions",
          "• Rescue breaths",
        ],
        activity: "In small groups, demonstrate the hand placement for compressions on a manikin or practice pillow.",
      },
      {
        title: "When to Use CPR",
        description: [
          "Use CPR when someone:",
          "🚨 Is unresponsive",
          "🚨 Is not breathing or only gasping",
          "🚨 Has no pulse",
          "Always call 911 first or send someone to do so.",
        ],
        activity: "Scenario: You find a person unconscious in the hallway. What are your first 3 steps?",
      },
      {
        title: "Steps for Performing CPR (Adults)",
        description: [
          "1. Check responsiveness",
          "2. Call for help (or assign someone to call 911)",
          "3. Begin chest compressions (30 compressions)",
          "4. Give 2 rescue breaths",
          "5. Continue until help arrives or AED is ready",
        ],
        activity: "Practice a full round of 30:2 compressions/breaths using a practice setup.",
      },
      {
        title: "What is First Aid?",
        description: [
          "First aid is the immediate care given to someone who is injured or suddenly ill until full medical treatment is available.",
          "It can save lives, prevent conditions from worsening, and aid in recovery.",
        ],
        activity: "Discuss: What’s the difference between first aid and emergency medical treatment?",
      },
      {
        title: "Common First Aid Situations",
        description: [
          "• Cuts and scrapes",
          "• Burns",
          "• Choking",
          "• Seizures",
          "• Allergic reactions",
          "• Broken bones",
          "• Heatstroke",
          "• Cold exposure",
        ],
        activity: "Split into pairs. Each group chooses a scenario and role-plays the first aid response.",
      },
      {
        title: "Choking Response",
        description: [
          "For adults:",
          "1. Ask if they are choking",
          "2. Encourage coughing if they can",
          "3. Perform abdominal thrusts (Heimlich maneuver)",
          "4. If they lose consciousness, start CPR",
        ],
        activity: "Practice the Heimlich maneuver using a training aid or pillow with a partner.",
      },
      {
        title: "AED (Automated External Defibrillator)",
        description: [
          "• Delivers a shock to help restart a stopped heart",
          "• Follow prompts exactly",
          "• Apply pads to bare chest",
          "• Resume CPR when prompted",
        ],
        activity: "Locate the AED in your building. Practice turning it on and following the prompts (without applying to a person).",
      },
      {
        title: "First Aid Kit & Emergency Preparedness",
        description: [
          "Keep kits stocked with:",
          "• Gloves",
          "• Bandages",
          "• Gauze",
          "• Antiseptic wipes",
          "• Emergency blanket",
          "• Tweezers",
          "• CPR mask",
        ],
        activity: "Check your site's first aid kit. What’s missing? Create a list to submit to your supervisor.",
      },
      {
        title: "Post-Incident Actions",
        description: [
          "• Document what happened",
          "• Notify supervisor",
          "• Monitor the individual",
          "• Provide emotional support if needed",
          "• Restock supplies used",
        ],
        activity: "Write a sample incident report for a minor burn treated with first aid.",
      },
      {
        title: "Wrap-Up and Commitment",
        description: [
          "You are now more prepared to respond to emergencies.",
          "Keep your certification current and keep practicing these skills.",
        ],
        activity: "Complete your quiz and discuss with your group one thing you’ll do differently in an emergency.",
      },

    ]
      }
      case "Fire Safety & Emergency Drills":{
        return{
      description: "Welcome to Fire Safety & Emergency Drills Training",
objective: [
  "Prepare to act quickly and confidently in emergencies through fire safety and evacuation procedures.",
  "Understand fire prevention and response",
  "Learn evacuation procedures",
  "Conduct and document emergency drills",
  "Support individuals during emergencies",
],
icebreaker: "Have you ever participated in a real fire evacuation? What did you learn?",
duration: "45-60 minutes",
    topics: [
    
      {
        title: "The Importance of Fire Safety",
        description: [
          "• Fires spread quickly – seconds matter",
          "• Training reduces panic and confusion",
          "• Everyone deserves a safe environment",
          "• Drills build confidence and preparedness",
        ],
        activity: "Group discussion: What are the emotional effects of fire drills for people with disabilities?",
      },
      {
        title: "Common Fire Hazards in ODP Settings",
        description: [
          "• Unattended cooking",
          "• Faulty electrical cords",
          "• Overloaded power strips",
          "• Candles, space heaters",
          "• Smoking indoors",
        ],
        activity: "Tour your site or review photos to identify 5 fire risks.",
      },
      {
        title: "Fire Prevention Tips",
        description: [
          "• Never leave stoves or ovens unattended",
          "• Keep combustibles away from heat sources",
          "• Use surge protectors",
          "• Conduct monthly checks of smoke detectors and alarms",
        ],
        activity: "Make a fire prevention checklist for your site.",
      },
      {
        title: "Evacuation Procedures",
        description: [
          "• Stay calm and give clear instructions",
          "• Guide individuals to exits",
          "• Bring attendance sheet",
          "• Account for everyone at the safe meeting location",
        ],
        activity: "Role-play: Evacuate your training room using real or mock routes.",
      },
      {
        title: "Using Fire Extinguishers – PASS Method",
        description: [
          "P – Pull the pin",
          "A – Aim at the base",
          "S – Squeeze the handle",
          "S – Sweep side to side",
        ],
        activity: "Practice with a training fire extinguisher or simulate the movements.",
      },
      {
        title: "Supporting Individuals During Drills",
        description: [
          "• Use visual supports and social stories",
          "• Prepare individuals for alarms and changes",
          "• Assign buddies",
          "• Keep mobility equipment ready",
        ],
        activity: "Develop a buddy plan for supporting individuals during drills.",
      },
      {
        title: "Conducting Emergency Drills",
        description: [
          "• Conduct drills quarterly (or monthly for some settings)",
          "• Document time, participants, response time",
          "• Review and improve based on outcomes",
        ],
        activity: "Design a fire drill log template and share with your team.",
      },
      {
        title: "After the Drill – Debrief and Improve",
        description: [
          "• Gather staff and participants",
          "• Discuss what went well and what didn’t",
          "• Update emergency plans if needed",
          "• Reassure and support individuals post-drill",
        ],
        activity: "Hold a debrief meeting and write down 3 things to improve next time.",
      },
      {
        title: "Thank You!",
        description: [
          "Thank you for being a champion of safety.",
          "Your calm, confident action in emergencies protects lives and builds trust.",
        ],
        activity: "Complete your quiz and submit your updated site fire drill log.",
      },
    ]
        }
      }
      case "Health & Safety":{
        return{
          description: "Welcome to Health & Safety Training",
objective: [
  "Learn how to maintain a safe, healthy environment for individuals receiving services through ODP.",
  "Understand the importance of health and safety",
  "Identify common hazards and prevention strategies",
  "Learn emergency response procedures",
  "Promote proactive health practices",
],
icebreaker: "Reflect: What does health and safety mean to you personally?",
duration: "45-60 minutes",
    topics: [
      {
        title: "Training Objectives",
        description: [
          "Understand the importance of health and safety",
          "Identify common hazards and prevention strategies",
          "Learn emergency response procedures",
          "Promote proactive health practices",
        ],
        activity: "Write a safety concern you’ve encountered in your job.",
      },
      {
        title: "Why Health & Safety Matters",
        description: [
          "• Protects individuals and staff",
          "• Promotes dignity and independence",
          "• Prevents injury and illness",
          "• Builds trust and well-being",
        ],
        activity: "Group discussion: What are the risks of ignoring health and safety practices?",
      },
      {
        title: "Common Hazards in ODP Settings",
        description: [
          "• Slips, trips, and falls",
          "• Medication errors",
          "• Infection transmission",
          "• Aggressive behavior",
          "• Improper lifting or transfers",
          "• Inaccessible exits",
        ],
        activity: "Create a list of hazards you’ve seen and how they were resolved.",
      },
      {
        title: "Preventing Accidents",
        description: [
          "• Clean up spills immediately",
          "• Keep walkways clear",
          "• Use assistive equipment properly",
          "• Conduct regular safety checks",
          "• Encourage personal hygiene",
        ],
        activity: "Perform a mock walk-through to identify safety issues in a practice setting.",
      },
      {
        title: "Infection Control Basics",
        description: [
          "• Hand washing and sanitizing",
          "• Use of PPE (gloves, masks, gowns)",
          "• Proper cleaning and disinfection",
          "• Universal precautions for bodily fluids",
        ],
        activity: "Demonstrate proper hand-washing technique with a partner.",
      },
      {
        title: "Medication Safety",
        description: [
          "• Administer only if trained and authorized",
          "• Follow 6 rights: right person, medication, dose, time, route, documentation",
          "• Lock and label all medications",
          "• Report medication errors immediately",
        ],
        activity: "Scenario: What do you do if you discover a medication was missed?",
      },
      {
        title: "Fire & Emergency Safety",
        description: [
          "• Know your emergency routes and exits",
          "• Participate in regular fire drills",
          "• Use extinguishers only if trained",
          "• Assist individuals to safety",
        ],
        activity: "Create a visual map of emergency exit routes in your work area.",
      },
      {
        title: "Safe Lifting & Transfers",
        description: [
          "• Bend knees, not back",
          "• Use gait belts when appropriate",
          "• Ask for help when needed",
          "• Communicate clearly during movement",
        ],
        activity: "Practice lifting techniques in pairs with feedback from peers.",
      },
      {
        title: "Recognizing Health Concerns",
        description: [
          "• Look for signs of illness (fever, fatigue, pain)",
          "• Document and report symptoms",
          "• Encourage appointments and preventive care",
          "• Support medication adherence",
        ],
        activity: "Quiz: Which symptoms require urgent medical attention?",
      },
      {
        title: "Reporting & Documentation",
        description: [
          "• Report incidents, injuries, hazards immediately",
          "• Use objective, timely, accurate documentation",
          "• Include what happened, who was involved, and steps taken",
        ],
        activity: "Rewrite an example report to make it clearer and more complete.",
      },
      {
        title: "Promoting Wellness & Prevention",
        description: [
          "• Support nutrition, exercise, and mental well-being",
          "• Offer choices and education",
          "• Encourage flu shots and screenings",
          "• Respect personal routines",
        ],
        activity: "Create a daily health and wellness checklist for the individuals you support.",
      },
      {
        title: "Thank You!",
        description: [
          "Thank you for your dedication to health and safety. Your actions prevent harm and promote thriving lives.",
        ],
        activity: "Complete your quiz and reflect on your biggest takeaway from this training.",
      },
    ],
        }
      }
  default:
  return {};

      

  }

}