 export const HabgetTrainingData = (option) => {
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
      case "Health & Safety":
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
      
      case "Incident Management (IM)":
        return{
     description: "Welcome to Incident Management (IM) Training",
    objective: [
    "Define what constitutes an incident in ODP",
    "Learn reporting requirements and timelines",
    "Practice documenting and reporting accurately",
    "Review roles and responsibilities"
  ],
  icebreaker: "Reflect: Have you ever witnessed an incident and didn't know what to do?",
  duration: "45-60 minutes",
  topics: [
    {
      title: "What is an Incident?",
      description: [
        "An incident is any event that harms or could potentially harm an individual",
        "ODP categorizes incidents into reportable and non-reportable"
      ],
      activity: "Group activity: List examples of incidents you've seen or heard of"
    },
    {
      title: "Types of Reportable Incidents",
      description: [
        "Abuse (physical sexual verbal)",
        "Neglect",
        "Death",
        "Missing person",
        "Injury requiring treatment beyond first aid",
        "Restraint use",
        "Law enforcement involvement"
      ],
      activity: "Match real-life examples to the correct incident type"
    },
    {
      title: "Recognizing Reportable vs. Non-Reportable",
      description: [
        "Reportable = Must be documented in EIM (Enterprise Incident Management)",
        "Non-Reportable = Document internally may not require state review"
      ],
      activity: "Scenario: Is this reportable? Analyze different situations"
    },
    {
      title: "Timeframes for Reporting",
      description: [
        "24 hours to report most incidents",
        "72 hours for discovery of sexual abuse",
        "5 calendar days for provider final entry (PFI)"
      ],
      activity: "Create a reporting timeline with your team using sample incidents"
    },
    {
      title: "Roles and Responsibilities",
      description: [
        "All staff must:",
        "Recognize incidents",
        "Ensure immediate safety",
        "Notify supervisor",
        "Document facts",
        "Submit into HCSIS/EIM if required"
      ],
      activity: "Create a checklist of your specific duties after witnessing an incident"
    },
    {
      title: "Immediate Response Steps",
      description: [
        "Ensure safety",
        "Call 911 if needed",
        "Provide first aid",
        "Notify supervisor",
        "Secure the scene (if needed)"
      ],
      activity: "Role-play an incident and demonstrate correct steps"
    },
    {
      title: "Documenting the Incident",
      description: [
        "Good documentation is:",
        "Objective",
        "Detailed",
        "Free of opinions",
        "Uses direct quotes",
        "Includes who what where when and how"
      ],
      activity: "Practice rewriting a poorly written incident note with your group"
    },
    {
      title: "Reporting in EIM (Enterprise Incident Management)",
      description: [
        "Log into HCSIS",
        "Complete incident report",
        "Submit Provider Final Entry (PFI)",
        "Review investigation results",
        "Implement corrective actions if needed"
      ],
      activity: "Walk through a sample EIM entry together"
    },
    {
      title: "Investigation Process",
      description: [
        "The provider or AE investigates the incident",
        "May involve interviews record reviews etc.",
        "Findings may result in corrective action",
        "Aim is to improve safety and prevent recurrence"
      ],
      activity: "Scenario: Your coworker is under investigation. How do you remain professional and objective?"
    },
    {
      title: "Corrective Actions and Learning",
      description: [
        "Every incident is an opportunity to improve",
        "Corrective actions might include:",
        "Policy review",
        "Retraining",
        "Environmental changes"
      ],
      activity: "Brainstorm: What lessons could be learned from recent incidents?"
    },
    {
      title: "Creating a Culture of Safety and Transparency",
      description: [
        "Encourage open communication",
        "Eliminate fear of reporting",
        "Reward proactive behavior",
        "Foster learning not blame"
      ],
      activity: "Design a poster promoting a 'Speak Up' culture in your workplace"
    },
    {
      title: "Wrap-Up & Next Steps",
      description: [
        "You are essential to keeping people safe",
        "Know what to do speak up report with integrity",
        "Together we protect and empower"
      ],
      activity: "Complete the quiz and sign your IM policy acknowledgment"
    }
  ]


        }
      
      case "HIPAA & Confidentiality":
        return{
           description: "Welcome to HIPAA & Confidentiality Training (ODP)",
  objective: [
    "Understand the purpose and scope of HIPAA",
    "Recognize what constitutes PHI",
    "Learn how to protect confidential information",
    "Identify violations and prevention methods"
  ],
  icebreaker: "What does confidentiality mean to you in your personal and professional life?",
  duration: "45-60 minutes",
  topics: [
    {
      title: "What Is HIPAA?",
      description: [
        "HIPAA = Health Insurance Portability and Accountability Act (1996)",
        "Established national standards to protect medical records and personal health information",
        "Applies to providers insurance companies and support workers"
      ],
      activity: "Discussion: Why does HIPAA matter to the people we support?"
    },
    {
      title: "What Is PHI?",
      description: [
        "PHI = Protected Health Information",
        "Name address DOB SSN",
        "Diagnoses treatments medications",
        "Any data that identifies a person + relates to health"
      ],
      activity: "Quiz game: Which of these examples qualify as PHI?"
    },
    {
      title: "Examples of PHI in ODP Services",
      description: [
        "Behavior support plans",
        "Medication administration records",
        "Progress notes",
        "Doctor's orders",
        "Insurance info",
        "Email or verbal conversations about care"
      ],
      activity: "Write down 3 examples of PHI you use or see every day"
    },
    {
      title: "Accessing PHI — Need to Know Basis",
      description: [
        "Staff may only access PHI required to perform their job",
        "No access is permitted out of curiosity",
        "Unauthorized access is a HIPAA violation"
      ],
      activity: "Scenario: What would you do if a coworker asks you about someone's diagnosis without cause?"
    },
    {
      title: "Common HIPAA Violations",
      description: [
        "Gossiping about someone's care",
        "Leaving documents in public areas",
        "Talking about individuals in hallways or elevators",
        "Using personal devices to store or share PHI"
      ],
      activity: "List 3 ways staff could unintentionally violate HIPAA"
    },
    {
      title: "How to Safeguard PHI (Verbal & Written)",
      description: [
        "Speak quietly in shared spaces",
        "Avoid using names unless necessary",
        "Shred paper PHI when no longer needed",
        "Do not leave paperwork unattended"
      ],
      activity: "Role-play: Responding when someone overhears a PHI conversation"
    },
    {
      title: "Protecting Electronic PHI (ePHI)",
      description: [
        "Use password-protected devices",
        "Never share usernames/passwords",
        "Lock computers when stepping away",
        "Send data only on encrypted systems"
      ],
      activity: "Self-check: Are your digital habits HIPAA-compliant?"
    },
    {
      title: "Social Media & HIPAA",
      description: [
        "NEVER post share or discuss clients or situations on social media even without names",
        "Any identifiable information = violation"
      ],
      activity: "Case study: Analyze a mock post and explain what went wrong"
    },
    {
      title: "Reporting Breaches of Confidentiality",
      description: [
        "Notify your supervisor or privacy officer immediately",
        "Complete an incident report",
        "Document only the facts",
        "Cooperate with investigations"
      ],
      activity: "Create a step-by-step guide for reporting a confidentiality breach"
    },
    {
      title: "Consequences of HIPAA Violations",
      description: [
        "Loss of trust and damage to agency reputation",
        "Fines up to $50000 per violation",
        "Job termination",
        "Civil or criminal liability"
      ],
      activity: "Reflection: How would a breach affect the people you support?"
    },
    {
      title: "Putting HIPAA into Practice",
      description: [
        "Protecting PHI means:",
        "Being mindful of surroundings",
        "Respecting dignity and privacy",
        "Knowing your role",
        "Speaking up when you see a concern"
      ],
      activity: "Activity: Identify 5 actions you'll take to improve confidentiality awareness"
    },
    {
      title: "Thank You!",
      description: [
        "You are a trusted guardian of privacy",
        "Thank you for taking your role seriously and protecting the people we serve"
      ],
      activity: "Complete your HIPAA quiz and confidentiality pledge"
    }
  ]
        }

        case "Job Duties & Program Expectations":
          return{       
  description: "Welcome to Job Duties & Program Expectations Training",
  objective: [
    "Understand staff responsibilities and program standards in ODP services"
  ],
  icebreaker: "What excites you most about working in this field?",
  duration: "45-60 minutes",
  topics: [
    {
      title: "Why Understanding Job Duties Matters",
      description: [
        "Ensures quality safe and person-centered services",
        "Clarifies expectations and roles across teams"
      ],
      activity: "Share a time when knowing your duties helped you succeed"
    },
    {
      title: "Daily Job Responsibilities",
      description: [
        "Support individuals in achieving ISP goals",
        "Assist with personal care meals community activities etc",
        "Document services provided during each shift"
      ],
      activity: "Create a mock shift checklist of your top duties"
    },
    {
      title: "Following the Individual Support Plan (ISP)",
      description: [
        "The ISP outlines goals needs preferences and support strategies",
        "Follow it closely to deliver individualized care"
      ],
      activity: "Scenario: What do you do if someone refuses a listed activity?"
    },
    {
      title: "Documentation Standards",
      description: [
        "Write progress notes for every service delivered",
        "Notes should be timely factual goal-oriented and complete"
      ],
      activity: "Spot and correct the mistakes in a sample progress note"
    },
    {
      title: "Professional Behavior & Boundaries",
      description: [
        "Maintain respectful ethical and non-dual relationships",
        "Avoid personal conversations or gifts with individuals"
      ],
      activity: "Scenario: A person supported wants to follow you on social media—how do you respond?"
    },
    {
      title: "Teamwork and Communication",
      description: [
        "Collaborate with coworkers and supervisors",
        "Report concerns participate in meetings and share updates"
      ],
      activity: "Role-play resolving a conflict between two coworkers"
    },
    {
      title: "Health Safety & Emergency Response",
      description: [
        "Ensure clean environments and follow hygiene/PPE practices",
        "Know what to do in emergencies—fire injury elopement etc"
      ],
      activity: "Scenario: What steps should you take after witnessing a fall?"
    },
    {
      title: "Meeting Program Expectations",
      description: [
        "Be reliable punctual and consistent",
        "Follow policies training and supervision"
      ],
      activity: "Self-assess your strengths and areas for improvement"
    },
    {
      title: "Wrap-Up: Your Role Your Impact",
      description: [
        "Every action supports quality of life for individuals served"
      ],
      activity: "Draft a personal accountability pledge"
    }
  ]
          }
          case "Documentation Standards & Progress Notes":
            return{
              description: "Welcome to Documentation Standards & Progress Notes Training",
  objective: [
    "Master best practices for documenting and writing effective progress notes"
  ],
  icebreaker: "Pair and Share - What does 'quality documentation' mean to you?",
  duration: "45-60 minutes",
  topics: [
    {
      title: "Why Accurate Documentation Matters",
      description: [
        "Ensures continuity of care",
        "Legal protection and compliance with ODP standards",
        "Communicates progress and needs across support team"
      ],
      activity: "Scenario Discussion: What are the risks of poor documentation?"
    },
    {
      title: "Types of Required Documentation",
      description: [
        "Daily Progress Notes",
        "Monthly Summaries",
        "Incident Reports"
      ],
      activity: "Interactive Matching: Match document type with its definition (facilitator-led activity)"
    },
    {
      title: "What Makes a Strong Progress Note?",
      description: [
        "Objective factual and clear language",
        "Ties to goals/outcomes from ISP",
        "Includes date time service type and signature"
      ],
      activity: "Review and rewrite an unclear note"
    },
    {
      title: "The GOLD Standard: Guidelines for Writing Notes",
      description: [
        "G - Goal: State the ISP goal",
        "O - Observation: Describe what was observed",
        "L - Level of Assistance: Note level of independence/support",
        "D - Data/Outcome: Describe progress or lack thereof"
      ],
      activity: "Scenario: Compare a GOLD note vs. a vague one"
    },
    {
      title: "Common Documentation Pitfalls",
      description: [
        "Using vague language (e.g. 'did well')",
        "Skipping details of support provided",
        "Subjective or biased comments"
      ],
      activity: "Group Brainstorm: List 'Do's and Don'ts' of documentation"
    },
    {
      title: "Using Person-Centered Language",
      description: [
        "Focus on abilities not limitations",
        "Respectful dignity-driven language"
      ],
      activity: "Reframe a sentence using person-first language"
    },
    {
      title: "Progress Note Template Breakdown",
      description: [
        "Standard Format: Date Time Goal Intervention Outcome Signature",
        "Sample Note Review: What's missing or incorrect?"
      ],
      activity: "Mini Quiz (Live Poll): Choose the best note example"
    },
    {
      title: "Legal and Compliance Considerations",
      description: [
        "HIPAA compliance in documentation",
        "Record retention and audit readiness"
      ],
      activity: "Scenario: You find a co-worker's incomplete note – what do you do?"
    },
    {
      title: "Wrap-Up & Q/A",
      description: [
        "Key Takeaways: Accuracy objectivity person-centered goal-linked"
      ],
      activity: "Write a sample progress note from a mock scenario"
    }
  ]
            }
    case "Mission and Values" :
      return{
  description: "Welcome to ODP Mission & Values",
  objective: [
    "Build deeper understanding of ODP’s mission and core values through activities, real-life scenarios, and discussion."
  ],
  icebreaker: "Engage. Reflect. Apply.",
  duration: "45-60 minutes",

        topics: [
        {
  title: "ODP Overview",
  description: [
    "ODP = Office of Developmental Programs",
    "Supports individuals with intellectual and developmental disabilities (IDD) across Pennsylvania.",
    "Focuses on community-based supports and independence."
  ],
  activity: ""
},
{
  title: "ODP Mission Statement",
  description: [
    "\"To support Pennsylvanians with developmental disabilities to achieve greater independence, choice, and opportunity in their lives.\""
  ],
  activity: "Discuss in groups: What does each part of this mission mean to you?"
},
{
  title: "Breaking It Down",
  description: [
    "Independence: Empower decision-making",
    "Choice: Tailor services to individual needs",
    "Opportunity: Encourage access to employment, housing, and relationships"
  ],
  activity: ""
},
{
  title: "ODP Core Values",
  description: [
    "Everyday Lives",
    "Choice & Control",
    "Inclusion",
    "Dignity & Respect",
    "Health & Safety",
    "Relationships",
    "Communication",
    "Partnership",
    "Accountability"
  ],
  activity: ""
},
{
  title: "Everyday Lives – Real World Meaning",
  description: [
    "All people want:",
    "A home",
    "Friends & relationships",
    "A purpose",
    "Community involvement"
  ],
  activity: "Create a 'Vision Board' using magazine cutouts or sketches that represent a good life."
},
{
  title: "Choice and Control",
  description: [
    "Support people to:",
    "Choose their clothes",
    "Plan their meals",
    "Set daily routines",
    "Pick their goals"
  ],
  activity: "Role Play: One staffer wants to change the individual’s lunch time. Discuss how to handle this respectfully."
},
{
  title: "Dignity and Respect",
  description: [
    "You promote dignity by:",
    "Knocking before entering",
    "Using people’s chosen names",
    "Listening actively",
    "Never assuming incompetence"
  ],
  activity: ""
},
{
  title: "Inclusion",
  description: [
    "Help individuals:",
    "Use public transport",
    "Join community classes",
    "Attend cultural events"
  ],
  activity: "Group Chat: What barriers have you seen to inclusion? How can we remove them?"
},
{
  title: "Health and Safety",
  description: [
    "Support safe living by:",
    "Following care plans",
    "Reporting incidents immediately",
    "Practicing fire and emergency drills"
  ],
  activity: "Interactive Activity Below"
},
{
  title: "Relationships Matter",
  description: [
    "Foster real connections:",
    "Support visits with family",
    "Assist in phone or video calls",
    "Encourage friendship and love"
  ],
  activity: "Scenario Discussion: A client wants to date someone. How do you support them?"
},
{
  title: "Communication = Power",
  description: [
    "Learn every individual’s language:",
    "- Gestures",
    "- Eye movement",
    "- Communication devices"
  ],
  activity: "Practice: Pair up and use non-verbal tools to communicate a message."
},
{
  title: "Partnership and Accountability",
  description: [
    "Work together with:",
    "Families",
    "Professionals",
    "Community organizations",
    "Keep records accurate",
    "Follow through on responsibilities",
    "Own your mistakes"
  ],
  activity: ""
},
{
  title: "Reflection & Self-Check",
  description: [
    "Ask Yourself:",
    "Am I treating others with dignity?",
    "Do I foster independence?",
    "Am I respecting individual communication?"
  ],
  activity: "Journaling Time: Write 1 way you'll apply today's training."
}

        ]
      }
      case "Person-Centered Practices":
        return {
  description: "Welcome to Person-Centered Practices - An ODP Training Experience",
  objective: [
    "Define Person-Centered Practices",
    "Understand values that support these practices",
    "Learn tools and methods to implement them",
    "Engage in real-world scenarios"
  ],
  icebreaker: "Reflect on a time when you felt truly listened to.",
  duration: "45-60 minutes",

  topics: [
    {
      title: "What Are Person-Centered Practices?",
      description: [
        "An approach that focuses on:",
        "The individual’s strengths",
        "What’s important TO and FOR them",
        "Promoting voice, choice, and control"
      ],
      activity: "Group discussion: What does person-centered mean to you?"
    },
    {
      title: "Important TO vs. Important FOR",
      description: [
        "Important TO = Preferences, relationships, routines",
        "Important FOR = Health, safety, responsibilities",
        "Balance is key"
      ],
      activity: "Scenario: A person wants to eat only sweets. How do you support both 'to' and 'for'?"
    },
    {
      title: "Person-Centered Thinking Tools",
      description: [
        "One-page profiles",
        "Communication charts",
        "Learning logs",
        "Decision-making profiles"
      ],
      activity: "Practice: Fill out a one-page profile for a peer or yourself."
    },
    {
      title: "Creating a Meaningful Day",
      description: [
        "Support routines that matter to the person",
        "Explore hobbies, passions, and social connections",
        "Avoid generic schedules"
      ],
      activity: "Map out a 'perfect day' with input from a mock individual."
    },
    {
      title: "Positive Presupposition",
      description: [
        "Believe the best about each person:",
        "Assume competence",
        "Assume the person has a meaningful past, present, and future"
      ],
      activity: "Reflection: How can assumptions harm or help outcomes?"
    },
    {
      title: "Listening to Understand",
      description: [
        "Active Listening Techniques:",
        "Open body language",
        "Clarifying questions",
        "Paraphrasing",
        "Validating emotions"
      ],
      activity: "Pair practice: One shares a story, the other practices active listening."
    },
    {
      title: "Planning WITH Not FOR",
      description: [
        "Involve the person in planning:",
        "Use their words and goals",
        "Make decisions together",
        "Revise based on feedback"
      ],
      activity: "Scenario: Rewrite a support plan sentence to reflect shared language."
    },
    {
      title: "Cultural Sensitivity & Person-Centeredness",
      description: [
        "Respect:",
        "Culture",
        "Religion",
        "Language",
        "Lived experience"
      ],
      activity: "Group share: What cultural values could impact support preferences?"
    },
    {
      title: "Person-Centered Support in Action",
      description: [
        "Look for:",
        "Flexibility",
        "Empowerment",
        "Creativity",
        "Respect"
      ],
      activity: "Case Study: How would you support 'Tina,' a 22-year-old who wants to start her own small business?"
    },
    {
      title: "Wrap Up & Commitments",
      description: [
        "What will YOU do differently?",
        "Apply at least one new person-centered tool",
        "Stay curious",
        "Listen more",
        "Ask first"
      ],
      activity: "Write a commitment statement to implement within 7 days."
    },
    {
      title: "Closing",
      description: [
        "Thank you for your dedication to person-centered care!",
        "Contact your supervisor with any questions."
      ],
      activity: "Complete the quiz and turn in your commitment statement."
    }
  ]
}
case "Recognition and Prevention of Exploitation":
  return{
  description: "Welcome to Recognition & Prevention of Exploitation Training",
  objective: [
    "Learn to identify, respond to, and prevent exploitation of vulnerable individuals."
  ],
  icebreaker: "Define 'exploitation' in your own words and share.",
  duration: "45-60 minutes",

  topics: [
    {
      title: "What is Exploitation?",
      description: [
        "Taking advantage of a person for personal gain.",
        "Includes financial, emotional, sexual, and labor exploitation."
      ],
      activity: "Group brainstorm – What are real-life examples of exploitation?"
    },
    {
      title: "Who is at Risk?",
      description: [
        "Individuals with intellectual and developmental disabilities (IDD).",
        "Those with limited communication or social support."
      ],
      scenario: "A support recipient gives a staff member a gift – appropriate or not?"
    },
    {
      title: "Signs of Exploitation",
      description: [
        "Unexplained money withdrawals or missing items.",
        "Fearful behavior, anxiety, secrecy."
      ],
      activity: "Match warning signs with types of exploitation."
    },
    {
      title: "Recognizing Financial Exploitation",
      description: [
        "Using someone's funds or property without permission.",
        "Manipulating someone into giving gifts or money."
      ],
      scenario: "Review a sample spending log – is anything concerning?"
    },
    {
      title: "Emotional & Psychological Exploitation",
      description: [
        "Includes manipulation, threats, isolation.",
        "Often harder to detect but equally harmful."
      ],
      activity: "Role Play: Responding to subtle emotional manipulation."
    },
    {
      title: "Reporting & Documentation",
      description: [
        "It is your DUTY to report suspected exploitation.",
        "Complete an incident report and notify your supervisor immediately."
      ],
      activity: "Practice writing a brief incident report based on a scenario."
    },
    {
      title: "Preventing Exploitation",
      description: [
        "Build trust and empower individuals.",
        "Promote independence and informed choices."
      ],
      activity: "Design a daily routine that reduces risk of exploitation."
    },
    {
      title: "Your Role as a Mandated Reporter",
      description: [
        "All ODP staff are mandated reporters.",
        "Failing to report is a violation of law and policy."
      ],
      scenario: "When is something worth reporting?"
    },
    {
      title: "Training Wrap-Up & Review",
      description: [
        "Recognize, Respond, Report, and Prevent exploitation."
      ],
      activity: "Create an anti-exploitation checklist for your worksite.",
      conclusion:"Q&A and resource review"
    },
  ]
}
case "Positive Approaches and Positive Behaviour Support":
  return{
  description: "Welcome to Positive Approaches & Positive Behavior Support",
  objective: [
    "Understand how to promote meaningful lives through respectful, individualized support."
  ],
  icebreaker: "Share one positive behavior support experience you've had.",
  duration: "45-60 minutes",

  topics: [
    {
      title: "What is Positive Approaches?",
      description: [
        "Philosophy focusing on strengths and person-centered planning.",
        "Emphasizes dignity, respect, and empowerment."
      ],
      activity: "Define 'positive approach' in your own words and share."
    },
    {
      title: "What is Positive Behavior Support (PBS)?",
      description: [
        "Evidence-based approach to understanding and addressing challenging behaviors.",
        "Focus: Prevention, skill-building, improving quality of life."
      ],
      scenario: "A person is yelling frequently—how might PBS approach this?"
    },
    {
      title: "Core Values of Positive Approaches",
      description: [
        "Respect and Dignity",
        "Person-Centered Planning",
        "Strength-Based Support"
      ],
      activity: "Group Brainstorm: What do these values look like in daily support?"
    },
    {
      title: "Understanding Behavior as Communication",
      description: [
        "All behavior has meaning and purpose.",
        "Ask: What is the person trying to communicate?"
      ],
      activity: "Behavior interpretation role-play"
    },
    {
      title: "Functional Behavior Assessment (FBA)",
      description: [
        "Identifies triggers, patterns, and functions of behavior.",
        "Collect data, observe, and involve the team."
      ],
      activity: "Case Study: Conduct a mini-FBA in small groups."
    },
    {
      title: "Developing Behavior Support Plans (BSP)",
      description: [
        "Plan includes proactive strategies, teaching new skills, and crisis responses.",
        "Focus on teaching and prevention, not punishment."
      ],
      activity: "Review a sample BSP and suggest improvements."
    },
    {
      title: "Proactive Strategies in PBS",
      description: [
        "Set routines, clear expectations, provide choices.",
        "Modify environment to reduce triggers."
      ],
      activity: "Design a calming environment plan."
    },
    {
      title: "Crisis Prevention and De-escalation",
      description: [
        "Remain calm, use soft tone, validate feelings.",
        "Avoid power struggles and reactive behavior."
      ],
      scenario: "You witness escalation—what do you do?"
    },
    {
      title: "Wrap-Up & Reflection",
      description: [
        "What was your biggest takeaway?"
      ],
      activity: "Create a mini positive support plan for a fictional person.",
      conclusion:"Q&A and resource sharing"
    },

  ]
}
case "Provider-Specific Policies and Procedures":
  return{
  description: "Welcome to Provider-Specific Policies & Procedures Training",
  objective: [
    "Learn how to follow our agency’s policies to ensure safe, ethical, and effective support."
  ],
  icebreaker: "What’s one policy you think every organization should have?",
  duration: "45-60 minutes",

  topics: [
    {
      title: "The Purpose of Policies & Procedures",
      description: [
        "Provide clear expectations and accountability.",
        "Protect the rights of individuals and staff."
      ],
      activity: "Small group discussion—What can go wrong without policies?"
    },
    {
      title: "Code of Conduct & Ethical Behavior",
      description: [
        "Act professionally, honestly, and respectfully at all times.",
        "Avoid conflicts of interest, favoritism, or inappropriate relationships."
      ],
      scenario: "A staff member accepts cash from a family—what now?"
    },
    {
      title: "Service Delivery Guidelines",
      description: [
        "Follow the ISP and individual-specific instructions.",
        "Engage in person-centered interactions."
      ],
      activity: "Review a sample ISP and match it with proper staff action."
    },
    {
      title: "Documentation Requirements",
      description: [
        "Write timely, accurate, objective progress notes.",
        "Record services immediately after delivery."
      ],
      activity: "Fix the errors in a poorly written documentation sample."
    },
    {
      title: "Confidentiality & HIPAA Responsibilities",
      description: [
        "Never share personal or health info without consent.",
        "Speak quietly and avoid using names in public areas."
      ],
      scenario: "A staff talks about an individual at a local store—what’s wrong?"
    },
    {
      title: "Health & Safety Protocols",
      description: [
        "Follow hygiene, PPE, and emergency plans.",
        "Maintain clean, hazard-free environments."
      ],
      activity: "Identify safety issues in a simulated environment image."
    },
    {
      title: "Incident Reporting Procedures",
      description: [
        "Report suspected abuse, neglect, or injuries immediately.",
        "Complete all required reports and notify your supervisor."
      ],
      scenario: "You see a bruise that wasn’t there yesterday—what do you do?"
    },
    {
      title: "Staff Conduct: Attendance & Communication",
      description: [
        "Show up on time, call out properly, and follow scheduling policies.",
        "Use professional language in all communication formats."
      ],
      activity: "Identify the professionalism errors in mock texts."
    },
    {
      title: "Training Wrap-Up & Final Thoughts",
      description: [
        "Policies and procedures keep everyone safe and accountable."
      ],
      activity: "Create a personal pledge of one policy you will prioritize.",
      conclusion:"Questions, feedback, and policy manual access"
    },
    {
      title: "Closing",
      description: [
        "Questions, feedback, and policy manual access"
      ],
      activity: ""
    }
  ]
}

  case "ODP Regulations and ISP Process":
    return{
description: "Welcome to ODP Regulations & ISP Process Training. Learn how ODP regulations and the ISP process work together to support individuals receiving services.",

objective: [
  "Understand key ODP regulations.",
  "Explore the ISP process step-by-step.",
  "Identify your role in ISP development.",
  "Practice applying regulations and ISP content."
],

icebreaker: "Reflect: Why is it important to follow regulations when supporting someone?",
duration: "45-60 minutes",

topics: [
  {
    title: "What Are ODP Regulations?",
    description: [
      "ODP regulations are rules and standards set by the Office of Developmental Programs to protect individuals and ensure quality support."
    ],
    activity: "Group brainstorm: What rules or policies do you follow daily in your role?"
  },
  {
    title: "Where Do Regulations Come From?",
    description: [
      "Federal Medicaid laws.",
      "PA Department of Human Services.",
      "55 Pa. Code Chapters 6100, 6400, 6500, 2380, 2390.",
      "Provider agreements and licensing requirements."
    ],
    activity: "Look up a section of 55 Pa. Code and summarize its purpose with your team."
  },
  {
    title: "Key Regulatory Focus Areas",
    description: [
      "Individual rights.",
      "Health and safety.",
      "Documentation.",
      "Staffing qualifications and training.",
      "Incident reporting.",
      "Service delivery standards."
    ],
    activity: "Match regulatory categories to real-life examples of service delivery."
  },
  {
    title: "What Is an ISP?",
    description: [
      "The Individual Support Plan (ISP) is a document that outlines a person’s needs, preferences, goals, and services to support them."
    ],
    activity: "Write a sentence you would include in someone’s ISP based on what’s important TO them."
  },
  {
    title: "Who Develops the ISP?",
    description: [
      "The ISP is developed by a team including the individual, family/guardians, supports coordinator, providers, and direct support professionals."
    ],
    activity: "Role-play an ISP team meeting and share input from the direct support professional's perspective."
  },
  {
    title: "Steps in the ISP Process",
    description: [
      "Gather info about the person.",
      "Review assessments and preferences.",
      "Create outcomes and goals.",
      "Define services and supports.",
      "Review and revise regularly."
    ],
    activity: "In pairs: Design a mock outcome for someone who wants a job."
  },
  {
    title: "Writing Outcomes and Goals",
    description: [
      "Outcomes must be person-centered, measurable, time-bound, linked to services, and progress-monitored."
    ],
    activity: "Rewrite a vague goal to make it specific and measurable."
  },
  {
    title: "Your Role in the ISP Process",
    description: [
      "Provide info about preferences and routines.",
      "Report changes in behavior/needs.",
      "Support goal achievement.",
      "Attend ISP meetings."
    ],
    activity: "List 3 ways you contribute to someone’s ISP success."
  },
  {
    title: "Monitoring and Updating the ISP",
    description: [
      "The ISP is a living document.",
      "Updated at least annually.",
      "Modified when needs change.",
      "Progress documented regularly."
    ],
    scenario: "A person no longer enjoys their community outing. What do you do?"
  },
  {
    title: "Regulations and Accountability",
    description: [
      "Follow ISP and regulatory requirements.",
      "Protect rights.",
      "Provide accurate documentation.",
      "Communicate concerns."
    ],
    scenario: "Case study: A support plan is not being followed. What’s your obligation?"
  },
  {
    title: "Putting It All Together",
    description: [
      "The ISP and regulations guide how we support individuals to live meaningful, safe, and empowered lives."
    ],
    activity: "Design a one-page infographic summarizing your responsibilities under the ISP and regulations."
  },
  {
    title: "Conclusion",
    description: [
      "Your understanding of regulations and the ISP ensures quality, dignity, and safety in the lives of those you serve."
    ],
    activity: "Complete your quiz and share your ISP takeaways."
  }
]
    }
  default:
  return {};

      

  }

}