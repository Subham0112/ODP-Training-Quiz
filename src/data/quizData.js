export const getQuizData = (option) => {
    if(option === 'Abuse Detection'){
return {
    questions: [
      {
        question: "What is abuse as defined under 55 PA Code Chapter 6100?",
        options: [
            "Playful teasing",
            "Unintentional harm",
           "Deliberate mistreatment that causes harm",
           "Light discipline",
        ],
        correct: "Deliberate mistreatment that causes harm"
      },
      {
        question: "Which of the following is a form of abuse?",
        options: [
        "Encouragement",
         "Financial exploitation",
          "Teaching skills",
          "Positive reinforcement",
        ],
        correct:  "Financial exploitation"
      },
      {
        question: `You are a mandated reporter. What does that mean?`,
        options: [
          `You can report only if you&#39;re sure`,
          `You report only to family members`,
          `You are required by law to report any suspected or alleged abuse`,
          `Only managers must report`
        ],
        correct: `You are required by law to report any suspected or alleged abuse`
      },
      {
        question: `What should you do if you suspect abuse?`,
        options: [
          `Ignore it if it’s not your client`,
          `Investigate it yourself`,
          `Immediately report per agency policy`,
          `Wait until your next shift`
        ],
        correct: `Immediately report per agency policy`
      },
      {
        question: `Which of the following is a sign of abuse?`,
        options: [
          `Frequent laughter`,
          `Active participation`,
          `Unexplained bruises or fearful behavior`,
          `Regular hygiene`
        ],
        correct: `Unexplained bruises or fearful behavior`
      },
      {
        question: `When must you report suspected abuse?`,
        options: [
        "Within 3 days",
        "By the end of the week",
        "Immediately or within 24 hours depending on policy",
        "After asking others first"
        ],
        correct: `Immediately or within 24 hours depending on policy`
      },
      {
        question: `What is something you should NOT do when responding to alleged abuse?`,
        options: [
        "Ensure safety",
        "Notify supervisor",
       "Start your own investigation",
        "Document the facts",
        ],
        correct:"Start your own investigation"
      },
      {
        question: `Which statement supports abuse prevention?`,
        options: [
        "Promote respect and safety in all interactions",
        "Ignore minor incidents",
        "Let individuals handle things alone",
        "Speak only to coworkers"
        ],
        correct: "Promote respect and safety in all interactions"
      },
      {
        question: `Why is failure to report abuse serious?`,
        options: [
        "It can lead to serious harm or death",
        "It’s okay if accidental",
        "It rarely causes issues",
        "Others will report it"
        ],
        correct: "It can lead to serious harm or death"
      },
      {
        question: `What is one way to empower individuals and prevent abuse?`,
        options: [
         "Control all their choices",
          "Discourage complaints",
          "Encourage self-advocacy and support their voice",
          "Keep things secret"
        ],
        correct: "Encourage self-advocacy and support their voice"
      }
    ]
    }
  
  }else if(option === 'Person Centered'){
    return {
      questions: [
        {
          question: `What is the core goal of person-centered practices?`,
          options: [
            "Getting tasks done quickly",
            "Meeting agency quotas",
            "Centering planning around the individual’s needs and preferences",
            "Avoiding risk"
          ],
          correct: "Centering planning around the individual’s needs and preferences"
        },
        {
          question: `Which of the following reflects person-centered thinking?`,
          options: [
           "This is how we always do it.",
           "Let’s ask the individual what they want.",
           "The team knows best.",
           "Just follow the standard routine."
          ],
          correct:  "Let’s ask the individual what they want."
        },
        {
          question: `What does 'important to' refer to in a person-centered plan?`,
          options: [
            "Medical appointments",
            "Things others want for the person",
            "What makes the person happy and satisfied in life",
            "Staff assignments"
          ],
          correct: "What makes the person happy and satisfied in life"
        },
        {
          question: `Which of the following is an example of supporting choice?`,
          options: [
            "Telling someone what they must do",
            "Offering options for how to spend their day",
            "Making all the decisions for the person",
            "Avoiding difficult discussions"
          ],
          correct: "Offering options for how to spend their day"
        },
        {
          question: `What is the role of a direct support professional in person-centered practices?`,
          options: [
           "Speak for the person",
           "Enforce routines",
           "Support and advocate for the individual’s choices and goals",
           "Make decisions without consultation"
          ],
          correct: "Support and advocate for the individual’s choices and goals"
        },
        {
          question: `How should differences in communication styles be addressed?`,
          options: [
            "Ignore them",
            "Use only verbal communication",
            "Support each person’s preferred communication method",
            "Avoid learning new styles"
          ],
          correct: "Support each person’s preferred communication method"
        },
        {
          question: `Which principle is NOT part of person-centered practices?`,
          options: [
            "Respect",
            "Inclusion",
            "Control by staff",
            "Choice"
          ],
          correct:  "Control by staff"
        },
        {
          question: `What should you do if a person wants to try something risky?`,
          options: [
            "Say no immediately",
            "Encourage and plan safe ways to support the choice",
            "Remove the option",
            "Redirect them"
          ],
          correct: "Encourage and plan safe ways to support the choice"
        },
        {
          question: `Why is cultural respect important in person-centered planning?`,
          options: [
            "It keeps things simple",
            "It’s required for legal compliance only",
            "It honors the individual’s identity and values",
            "It replaces the ISP"
          ],
          correct: "It honors the individual’s identity and values"
        },
        {
          question: `What is the most person-centered response to 'Can I go to the store today?'`,
          options: [
            "No, it’s not scheduled",
            "Maybe later",
            " Let’s see how we can support that!",
            "You don’t need anything"
          ],
          correct: " Let’s see how we can support that!"
        },
      ],
    };
}else if(option === 'Individual Rights'){
  return {
      questions: [
        {
          question: `What is the purpose of the 55 PA Code Chapter 6100 regulations?`,
          options: [
            "To assign job tasks to staff",
            "To protect the rights of individuals receiving services",
            "To limit choices",
            "To replace ISPs"
          ],
          correct: "To protect the rights of individuals receiving services"
        },
        {
          question: `Which of the following is a basic right of individuals receiving services?`,
          options: [
            "To be ignored during care",
            "To choose what they eat and wear",
            "To follow the staff’s rules only",
            "To give up their vote"
          ],
          correct: "To choose what they eat and wear"
        },
        {
          question: `What does dignity and respect mean in service delivery?`,
          options: [
            "Allowing personal choice and treating individuals as equals",
            "Ignoring complaints",
            "Giving orders to ensure compliance",
            "Always agreeing with the family"
          ],
          correct: "Allowing personal choice and treating individuals as equals"
        },
        {
          question: `Which action violates confidentiality?`,
          options: [
            "Keeping records secure",
            "Discussing someone’s diagnosis in public",
            "Using initials in public notes",
            "Locking up files"
          ],
          correct: "Discussing someone’s diagnosis in public"
        },
        {
          question: `If someone refuses an activity in their ISP, what should you do?`,
          options: [
            "Force them to comply",
            "Offer other options and document the refusal",
            "Punish them for non-compliance",
            "Skip the rest of the shift"
          ],
          correct: "Offer other options and document the refusal"
        },
        {
          question: `Who has the right to report suspected abuse or neglect?`,
          options: [
            "Only supervisors",
            "Mandated reporters only",
            "Everyone, and staff must report immediately",
            "Friends and family only"
          ],
          correct: "Everyone, and staff must report immediately"
        },
        {
          question: `What is an example of supporting informed choice?`,
          options: [
            "Deciding what’s best for the individual",
            "Offering options with explanations",
            "Ignoring their preferences",
            "Only asking once"
          ],
          correct: "Offering options with explanations"
        },
        {
          question: `Which of these is an individual’s right under 6100?`,
          options: [
                "To vote",
                "To access religious services",
                "To have visitors",
                "All of the above"
          ],
          correct: "To have visitors"
        },
        {
          question: `What should you do if a person’s rights are being violated?`,
          options: [
            "Say nothing",
            "Talk to the person violating them",
            "Report the incident per policy immediately",
            "Write about it later"
          ],
          correct: "Report the incident per policy immediately"
        },
        {
          question: `What is your responsibility as a staff member regarding rights?`,
          options: [
            "To know them, protect them, and empower individuals",
            "To enforce house rules only",
            "To avoid rights discussions",
            "To report only serious violations"
          ],
          correct: "To know them, protect them, and empower individuals"
        }
      ],
    };
}else if(option === 'Recognizing and Reporting Incident'){
  return {
      questions: [
        {
          question: `What is a reportable incident under 55 PA Code Chapter 6100?`,
          options: [
            "A staff member running late",
            "A small disagreement",
            "Abuse, neglect, or injury requiring medical treatment",
            "A schedule change"
          ],
          correct:  "Abuse, neglect, or injury requiring medical treatment"
        },
        {
          question: `What should you do first if you witness an incident?`,
          options: [
            "Call a friend",
            "Ensure the individual is safe",
            "Wait until your supervisor arrives",
            "Post about it online"
          ],
          correct: "Ensure the individual is safe"
        },
        {
          question: `Which of the following must be included in an incident report?`,
          options: [
            "Your opinion",
            "Only the person's first name",
            "Who, what, when, where, and how",
            "What coworkers said"
          ],
          correct: "Who, what, when, where, and how"
        },
        {
          question: `When should you report an incident?`,
          options: [
            "At the end of the month",
            "Immediately or within the timeframe set by agency policy",
            "After the team meeting",
            "If others agree"
          ],
          correct: "Immediately or within the timeframe set by agency policy"
        },
        {
          question: `What does being a mandated reporter mean?`,
          options: [
           "You report only if someone tells you to",
            "You must report suspected or actual incidents of abuse or serious harm",
            "You can decide whether to report",
            "Only supervisors report"
          ],
          correct: "You must report suspected or actual incidents of abuse or serious harm"
        },
        {
          question: `Which of the following is a red flag for potential abuse or neglect?`,
          options: [
                "Smiling often",
                "Wearing clean clothes",
                "Flinching when approached",
                "Having hobbies"
          ],
          correct: "Flinching when approached"
        },
        {
          question: `What is one reason why some staff fail to report incidents?`,
          options: [
            "Too much support",
            "Fear of retaliation or misunderstanding the process",
            "Being praised for honesty",
            "They want to fill out paperwork"
          ],
          correct: "Fear of retaliation or misunderstanding the process"
        },
        {
          question: `What can happen if you fail to report a serious incident?`,
          options: [
            "Nothing",
            "The problem solves itself",
            "Legal consequences and harm to the individual",
            "You get promoted"
          ],
          correct: "Legal consequences and harm to the individual"
        },
        {
          question: `What should you avoid when writing an incident report?`,
          options: [
           "Using clear facts",
           "Including the date and time",
           "Including your opinion or assumptions",
           "Reporting within 24 hours"
          ],
          correct: "Including your opinion or assumptions"
        },
        {
          question: `What is the goal of incident reporting?`,
          options: [
            "To punish staff",
            "To get people fired",
            "To protect individuals and improve safety",
            "To avoid accountability"
          ],
          correct: "To protect individuals and improve safety"
        },
      ],
    };
}
};