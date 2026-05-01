export const privacyPolicy = {
  lastUpdated: new Date().toLocaleDateString(),
  sections: [
    {
      id: 1,
      slug: "introduction",
      title: "1. Introduction",
      content: "Welcome to NoteBean. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
    },
    {
      id: 2,
      slug: "data-collection",
      title: "2. The Data We Collect",
      content: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:",
      list: [
        { label: "Identity Data", description: "includes first name, last name, username or similar identifier." },
        { label: "Contact Data", description: "includes email address and telephone numbers." },
        { label: "Technical Data", description: "includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location." },
        { label: "Usage Data", description: "includes information about how you use our website, products and services." }
      ]
    },
    {
      id: 3,
      slug: "data-usage",
      title: "3. How We Use Your Data",
      content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
      list: [
        "Where we need to perform the contract we are about to enter into or have entered into with you.",
        "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
        "Where we need to comply with a legal or regulatory obligation."
      ]
    },
    {
      id: 4,
      slug: "data-security",
      title: "4. Data Security",
      content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed."
    },
    {
      id: 5,
      slug: "contact-us",
      title: "5. Contact Us",
      content: "If you have any questions about this privacy policy or our privacy practices, please contact us at support@notebean.com."
    }
  ]
};

export const termsAndConditions = {
  lastUpdated: new Date().toLocaleDateString(),
  sections: [
    {
      id: 1,
      slug: "agreement",
      title: "1. Agreement to Terms",
      content: "By accessing or using NoteBean's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service."
    },
    {
      id: 2,
      slug: "license",
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on NoteBean's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
      list: [
        "modify or copy the materials;",
        "use the materials for any commercial purpose, or for any public display (commercial or non-commercial);",
        "attempt to decompile or reverse engineer any software contained on NoteBean's website;",
        "remove any copyright or other proprietary notations from the materials; or",
        "transfer the materials to another person or \"mirror\" the materials on any other server."
      ]
    },
    {
      id: 3,
      slug: "disclaimer",
      title: "3. Disclaimer",
      content: "The materials on NoteBean's website are provided on an 'as is' basis. NoteBean makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      id: 4,
      slug: "limitations",
      title: "4. Limitations",
      content: "In no event shall NoteBean or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NoteBean's website, even if NoteBean or a NoteBean authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
      id: 5,
      slug: "governing-law",
      title: "5. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which NoteBean is established, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    }
  ]
};
