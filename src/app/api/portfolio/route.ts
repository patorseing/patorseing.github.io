import { NextResponse } from "next/server";

import pdf from "pdfjs";
import Symbol from "pdfjs/font/Symbol";
import HelveticaBold from "pdfjs/font/Helvetica-Bold";
import HelveticaBoldOblique from "pdfjs/font/Helvetica-BoldOblique";
import HelveticaOblique from "pdfjs/font/Helvetica-Oblique";
import Helvetica from "pdfjs/font/Helvetica";

const fonts = {
  Symbol,
  Helvetica,
  HelveticaBoldOblique,
  HelveticaOblique,
  HelveticaBold,
};

const start = 12;

const fontSize = {
  title: start,
  subtitle: start - 3,
  header: start - 2,
  smallHeader: start - 4,
};

const lineHeight = 1.5;

type University = {
  date: string;
  school: string;
  degree: string;
  university?: string;
  gpa?: string;
  major?: string;
  favoriteSubjects?: Array<string>;
};

type Award = {
  date: string;
  name: string;
};

type Work = {
  date: string;
  title: string;
  type: string;
  company?: string;
  location: string;
  description: Array<string>;
};

const data: {
  name: string;
  address: string;
  contact: {
    [key: string]: string | { name: string; opt: pdf.TextOptions };
  };
  info: { [key: string]: Array<University | Award | Work> };
  etc: { [key: string]: { [key: string]: string } | Array<string> };
} = {
  name: "Napatchol Thaipanich",
  address: "Bangkok, Thailand",
  contact: {
    Tel: "(+66)0959390164",
    Email: "napatchol.tha@gmail.com",
    LinkedIn: {
      name: "napatchol-thaipanich",
      opt: {
        link: "https://www.linkedin.com/in/napatchol-thaipanich",
        underline: true,
        color: 0x569cd6,
      },
    },
  },
  info: {
    "Education and Awards": [
      // {
      //   date: "2015 - 2023",
      //   school: "Faculty of Law",
      //   university: "Ramkhamhaeng University",
      //   degree: "Bachelor of Laws (LL.B.)",
      //   // gpa: "2.8",
      //   favoriteSubjects: [
      //     "KOR1001 - KOR2002 Fundamental Korean",
      //     "LAW3003 Civil and Commercial Law: Family",
      //     "LAW3009 Civil and Commercial Law: Succession",
      //     "LAW4009 Law on Intellectual Property 1",
      //     "LAW4010 International Trade Law",
      //     "LAW4053 Law Related to Computer",
      //   ],
      // },
      {
        date: "2022",
        name: "Women Thailand Cyber Top Talent 2022, the top 4 by NCSA & HUAWEI ",
      },
      {
        date: "2020",
        name: "CJE Hackathon 2020 Generation 1, the top 3 by Botnoi Consulting",
      },
      {
        date: "2015 - 2019",
        school: "Faculty of Information and Communication Technology",
        university: "Mahidol University",
        degree: "Bachelor of Science (B.Sc.)",
        major: "Database and Intelligent Systems (DB)",
        gpa: "3.18",
        favoriteSubjects: [
          "Web Programming",
          "Computer Organization and Architecture",
          "Data Structures and Algorithm Analysis",
          "Database Management Systems",
          "Information Storage and Retrieval",
          "Database Design",
          "Human-Computer Interface",
          "Digital Image processing",
        ],
      },
      {
        date: "2013 - 2015",
        school:
          "Kasetsart University Laboratory School, Center for Educational Research and Development",
        degree: "High School",
        major: "Science-Math",
      },
      {
        date: "2013",
        name: "Certifiate of Merit, Class Distinction, The Royal Australian Chemical Institute",
      },
    ],
    "Work Experience": [
      {
        date: "04/2023 - Current",
        title: "Frontend Developer",
        type: "Freelance",
        location: "Bangkok, Thailand",
        description: ["Pruxus: to maintain their website"],
      },
      {
        date: "12/2021 - 04/2023",
        title: "Frontend Developer",
        type: "Full-time",
        company: "Data Wow Co., Ltd.",
        location: "Bangkok, Thailand",
        description: [
          "PDPA (Such as Cookie wow, PDPA Pro, PDPA Prokit, and PDPA Learn) Develop websites related to PDPA (Personal Data Protection Act)",
          "Etc. (Develop a website for Data Wow Co., Ltd. and external customers, such as dashboards, reports, chat storage (line chatbot), online mock exam platforms, etc.)",
        ],
      },
      {
        date: "11/2019 - 11/2021",
        title: "System Analyst",
        type: "Full-time",
        company: "Bank of Thailand",
        location: "Bangkok, Thailand",
        description: [
          "DLTBond: We use Blockchain (Hyperledger Fabric) to distribute a chance to purchase the government bond for every person by not giving the bank the quota to the selling agent. I design, develop, regulate, and supervise the system with the team.",
          "ISO20022: The new standard for payment messaging, which will apply to the central core of the payment system in November 2025, includes Thailand, which also has to be shifted. So I am involved in getting BA's requirement to Analyze and Develop the plan with the team and Test the flow with the team.",
          "RPA: RPA stands for Robotic process automation. Bank of Thailand also applies RPA to reduce the time spent on routine tasks and has time to use in the value task. I am involved in Analysis, Adjust and Improve the process and develop the flow by UiPath as an RPA developer.",
        ],
      },
      {
        date: "06/2019 - 08/2019",
        title: "Blockchain Developer, KBTG Develop Bootcamp 2019",
        type: "Internship",
        company: "Kasikorn Business Technology Group (KBTG)",
        location: "Bangkok, Thailand",
        description: [
          "Time D(onation): It is about the use case of blockchain to solve the social problem. This project uses the Stellar blockchain to create a Time D token on the platform to exchange volunteer service and keep track of volunteer service to give a reward. I am in brainstorm the idea, design, and develop the prototype with the team",
        ],
      },
      {
        date: "06/2018 - 07/2018",
        title: "Frontend Developer",
        type: "Internship",
        company: "BeID Corporation Co., Ltd.",
        location: "Bangkok, Thailand",
        description: [
          "About developing in dashboard and landing page in React.JS",
        ],
      },
    ],
  },
  etc: {
    Languages: {
      English: "IELTS: band 5.5",
      Korean: "TOPIK: level 1",
      Thai: "mother tongue",
    },
    Interests: [
      "Law",
      "CTF (Capture The Flag)",
      "Piano",
      "Photographing",
      "Traveling (experience includes Macau, Hong Kong, Japan, Singapore)",
      "Cooking",
      "Table Tennis",
      "Badminton",
      "Swimming",
      "ROV (MOBA game)",
    ],
  },
};

const headerStyle = {
  fontSize: fontSize.header,
  font: fonts.HelveticaBold,
  lineHeight,
};

const dateStyle = {
  fontSize: fontSize.subtitle,
  font: fonts.Helvetica,
  lineHeight,
};

const subheaderStyle = {
  fontSize: fontSize.subtitle,
  font: fonts.HelveticaBold,
  lineHeight,
};

const smallHeaderStyle = {
  fontSize: fontSize.smallHeader,
  font: fonts.HelveticaBold,
  lineHeight,
};

export async function GET() {
  const doc = new pdf.Document({
    font: fonts.Helvetica,
    paddingLeft: 1 * pdf.cm,
    paddingRight: 1 * pdf.cm,
  });

  // Name
  doc
    .text({
      fontSize: fontSize.title,
      font: fonts.HelveticaBold,
      textAlign: "center",
      lineHeight,
    })
    .add(data.name);

  // Address and contact
  const addressAndContact = doc
    .cell({ paddingBottom: 0.5 * pdf.cm })
    .text({
      fontSize: fontSize.subtitle,
      textAlign: "center",
    })
    .add(data.address)
    .br();

  const contact = Object.entries(data.contact);

  contact.forEach(([key, val], idx) => {
    addressAndContact
      .add(typeof val === "object" ? key : "")
      .add(
        (typeof val === "object" ? val.name : `${key}: ${val}`) +
          (idx + 1 === contact.length ? "" : "; "),
        typeof val === "object" ? val.opt : {}
      );
  });

  // main hr
  doc.cell({ borderWidth: 0.5 });

  // Education and Awards & Work Experience
  Object.entries(data.info).forEach(([key, val]) => {
    doc.text(headerStyle).add(key);
    Object.values(val).forEach((val) => {
      const table = doc.table({
        widths: [90, null],
        paddingBottom: 5,
      });
      const tr = table.row();

      tr.cell(val.date, dateStyle);

      const detail = tr.cell().text(dateStyle);

      if ((val as University)?.school) {
        const uniDetail = val as University;
        detail.add(
          `${uniDetail.school}${
            uniDetail?.university ? `, ${uniDetail?.university}` : ""
          }${uniDetail?.degree ? `, ${uniDetail?.degree}` : ""}`,
          subheaderStyle
        );

        if (uniDetail?.major || uniDetail?.gpa) {
          detail
            .br()
            .add(uniDetail?.major ? "Major:" : "", subheaderStyle)
            .add(uniDetail?.major ?? "")
            .add(uniDetail?.gpa ? "GPA:" : "", subheaderStyle)
            .add(uniDetail?.gpa ?? "");
        }

        if (uniDetail?.favoriteSubjects) {
          detail
            .br()
            .add(
              uniDetail.favoriteSubjects ? "Favorite Subject: " : "",
              subheaderStyle
            )
            .add(uniDetail.favoriteSubjects.join(", "));
        }
      } else if ((val as Award)?.name) {
        const awardDetail = val as Award;
        detail.add(awardDetail.name);
      } else {
        const { title, type, company, location, description } = val as Work;
        const workDetails = detail
          .add([title, type].join(", "), subheaderStyle)
          .br()
          .add(
            [company, location].filter((val) => val).join(", "),
            smallHeaderStyle
          );

        description.forEach((desc) => {
          workDetails.br().add(`- ${desc}`);
        });
      }
    });

    doc.cell({ borderWidth: 0.25 });
  });

  Object.entries(data.etc).forEach(([key, val]) => {
    const table = doc.table({
      widths: [90, null],
      paddingBottom: 5,
    });

    const tr = table.row();

    tr.cell(key, headerStyle);
    tr.cell(
      Array.isArray(val)
        ? val.join(", ")
        : Object.entries(val)
            .map(([key, val]) => `${key}: ${val}`)
            .join("; "),
      dateStyle
    );
  });

  doc.cell({ borderWidth: 0.25 });

  // References upon request
  doc.text(headerStyle).add("References upon request");

  const buf = await doc.asBuffer();

  const contentType = "application/pdf";

  const blob = new Blob([buf], { type: contentType });

  console.log(blob);

  const headers = new Headers();

  headers.set("Content-Type", contentType);

  return new NextResponse(blob, { status: 200, statusText: "OK", headers });
}
