// Project data, ported verbatim from the static site (site/work.html + site/work-*.html).
// `desc` is the case-study meta description; `cardDesc` is the shorter work-index blurb.
// `cardTags`/`chip`/`timeLabel`/`cardPendingLabel` are the work-index presentation;
// `tags`/`summary` are the case-study view. `github`/`demo` are the card action links.
// Inline emphasis uses **bold** and `code`; components/Rich.js renders it as real elements.
// Strings hold plain text only: no raw HTML tags and no HTML entities.

export const projects = [
  {
    "slug": "work-multi-agent-research",
    "grad": "grad-1",
    "label": "AI Research System",
    "title": "AI-Powered Multi-Agent Research Intelligence",
    "summary": "An agent pipeline that turns a plain-language topic into a researched report — search the live web, read the sources, write it up, then score the result.",
    "desc": "A multi-agent LangGraph system that searches the web with Tavily, extracts pages with BeautifulSoup, writes a structured report and scores it with an AI critic.",
    "status": "built",
    "tags": [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Tavily",
      "BeautifulSoup",
      "Streamlit"
    ],
    "demo": "https://multi-agent-research-system-aqewssxctmpu5r45pgrxut.streamlit.app/",
    "github": "https://github.com/theaakashgupta",
    "also": "Multi-Agent AI System for Automated Web Research and Report Generation",
    "sections": [
      {
        "h": "Overview",
        "p": [
          "The internet almost always contains the answer to a research question. Getting it out still means searching for sources, reading each page, pulling the useful parts together and writing it up — a long chain of manual steps.",
          "This project automates that chain. A team of specialised agents divides the work: one finds sources, one reads them, one writes, and one criticises the output. Each hands its result to the next through shared state, so the pipeline runs end to end from a single line of input."
        ]
      },
      {
        "h": "The problem",
        "bullets": [
          "**Research is slow by hand.** Searching, reading, organising and summarising across many sources eats most of the time.",
          "**Models answer from memory.** Without a connection to external sources, a language model can return information that is simply out of date.",
          "**Findings need structure.** Raw excerpts from a dozen pages are not a report — they have to be organised before anyone can use them.",
          "**Output needs checking.** A generated report should be assessed before it is trusted, not assumed correct."
        ]
      },
      {
        "h": "How it works",
        "flow": [
          [
            "Search Agent",
            "Takes the research topic in natural language and queries the Tavily API to find current, relevant sources."
          ],
          [
            "Reader Agent",
            "Fetches the selected URLs and strips each page down to readable text with BeautifulSoup."
          ],
          [
            "Workflow Manager",
            "Holds the shared state — topic, search results, scraped content — and controls the order every stage runs in."
          ],
          [
            "Writer Chain",
            "Feeds the collected evidence to an LLM and generates a structured research report."
          ],
          [
            "Critic Chain",
            "Reviews the finished report and returns a quality score along with specific improvement suggestions."
          ]
        ]
      },
      {
        "h": "What it does",
        "bullets": [
          "Runs **real-time web search** so results reflect current sources rather than model memory.",
          "**Extracts readable content** from web pages instead of passing raw HTML to the model.",
          "**Generates structured reports** rather than loose summaries.",
          "**Scores its own output** with a dedicated critic stage, so quality is measured and not assumed.",
          "**Keeps state between stages**, so each agent builds on the last instead of starting over."
        ]
      },
      {
        "h": "Tech stack",
        "bullets": [
          "**Python** — core language for the whole pipeline.",
          "**LangGraph** — state-based workflow that sequences the agents and carries state between them.",
          "**LangChain** — prompt chains and LLM calls for the writer and critic stages.",
          "**OpenAI** — LLM calls for report generation and critique.",
          "**Tavily API** — web search for live source discovery.",
          "**BeautifulSoup** — HTML parsing and readable-text extraction.",
          "**Streamlit** — the web interface the demo runs on."
        ]
      }
    ],
    "cardPendingLabel": null,
    "cardDesc": "An AI research system that researches topics, analyzes web sources and generates structured reports with search, reader, writer and critic agents.",
    "cardTags": [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI"
    ],
    "mono": "AI",
    "cardBadge": "built",
    "chip": "▶ Live demo",
    "timeLabel": "Open app",
    "playAria": "Watch demo of Multi-Agent Research Intelligence"
  },
  {
    "slug": "work-pdf-insights",
    "grad": "grad-2",
    "label": "RAG Application",
    "title": "PDF Insights Engine — RAG",
    "summary": "Upload a PDF, ask questions about it, and get answers grounded in the document's own text instead of the model's memory.",
    "desc": "A retrieval-augmented generation app: upload PDFs, index their content into a FAISS vector store and ask questions about the documents.",
    "status": "built",
    "tags": [
      "RAG",
      "LangChain",
      "FAISS",
      "LLMs"
    ],
    "demo": "https://pdf-insight-engine-8wek9gti5pcymzxarczmg8.streamlit.app/",
    "github": "https://github.com/theaakashgupta",
    "also": "Retrieval-Augmented Generation over uploaded documents",
    "sections": [
      {
        "h": "Overview",
        "p": [
          "Asking a language model about a document it has never seen usually gets you a confident guess. Retrieval-augmented generation fixes that by looking the answer up in the document first.",
          "This app takes a PDF, breaks its text into searchable pieces, stores them as vectors, and pulls back only the pieces relevant to each question. The model then answers using that retrieved context, so the response is grounded in what the file actually says."
        ]
      },
      {
        "h": "The problem",
        "bullets": [
          "**Long documents are slow to read.** Finding the one relevant paragraph in a long PDF is manual work.",
          "**Keyword search misses meaning.** Searching for “affects revenue” will not match a paragraph that says “drives income”.",
          "**Models cannot be fine-tuned per document.** RAG makes a specific document usable immediately, with no retraining.",
          "**Answers need a source.** Grounding the answer in retrieved text keeps it tied to the document."
        ]
      },
      {
        "h": "How it works",
        "flow": [
          [
            "Ingest",
            "The uploaded PDF is read and its text extracted for processing."
          ],
          [
            "Chunk",
            "The text is split into smaller passages so each one carries enough context to stand alone."
          ],
          [
            "Embed & index",
            "Each chunk is converted to a vector and stored in a FAISS vector index."
          ],
          [
            "Retrieve",
            "A question is embedded the same way and matched against the index, returning the closest passages."
          ],
          [
            "Generate",
            "The LLM answers using only the retrieved passages as context, so the response stays grounded."
          ]
        ]
      },
      {
        "h": "What it does",
        "bullets": [
          "**Accepts PDF uploads** and processes their content on the fly.",
          "**Answers questions about the document** rather than about general knowledge.",
          "**Semantic retrieval** — matches on meaning, not just matching words.",
          "**Grounded responses** built from retrieved passages instead of model memory."
        ]
      },
      {
        "h": "Tech stack",
        "bullets": [
          "**LangChain** — retrieval and generation chains that tie the pipeline together.",
          "**FAISS** — vector store for fast similarity search over the document chunks.",
          "**LLMs** — embeddings and the final grounded answer.",
          "**Streamlit** — the upload-and-ask interface used by the live demo."
        ]
      }
    ],
    "cardPendingLabel": null,
    "cardDesc": "A Retrieval-Augmented Generation app — upload PDFs, process their content and ask questions about the documents.",
    "cardTags": [
      "RAG",
      "LangChain",
      "FAISS",
      "LLMs"
    ],
    "mono": "PDF",
    "cardBadge": "built",
    "chip": "▶ Live demo",
    "timeLabel": "Open app",
    "playAria": "Watch demo of PDF Insights Engine"
  },
  {
    "slug": "work-movie-recommendation",
    "grad": "grad-3",
    "label": "Machine Learning",
    "title": "Movie Recommendation System",
    "summary": "Content-based recommendations that compare a film's metadata against the rest of the catalogue using TF-IDF vectors and cosine similarity.",
    "desc": "A content-based movie recommendation system using TF-IDF and cosine similarity, served through a FastAPI backend.",
    "status": "built",
    "tags": [
      "Scikit-learn",
      "TF-IDF",
      "FastAPI"
    ],
    "demo": "https://codewithskyies-movie-recommendation-system-streamlit-app-nxrndo.streamlit.app/",
    "github": "https://github.com/theaakashgupta",
    "also": "Content-based filtering with cosine similarity",
    "sections": [
      {
        "h": "Overview",
        "p": [
          "Recommendation systems are usually split into two families: collaborative filtering, which leans on what other people watched, and content-based filtering, which leans on what a film is actually made of.",
          "This one is content-based. Each movie is described by its metadata — plot, genre, cast, themes — and that text is turned into a TF-IDF vector. Similarity between those vectors is what drives every recommendation.",
          "The upside is that it works on day one. There is no cold-start problem, because it never needs other users' behaviour to make its first suggestion."
        ]
      },
      {
        "h": "How it works",
        "flow": [
          [
            "Describe",
            "Collect the text metadata for each movie — plot, genre, cast and keywords."
          ],
          [
            "Vectorise",
            "Build a TF-IDF matrix over that text, down-weighting common words so distinctive terms carry more signal."
          ],
          [
            "Compare",
            "Take the cosine similarity between a target film and every other film in the catalogue."
          ],
          [
            "Rank",
            "Return the highest-scoring matches, each with its similarity score attached."
          ]
        ]
      },
      {
        "h": "Results",
        "p": [
          "Similarity scores from the running app show the model clustering films by content rather than by popularity alone:"
        ],
        "scores": [
          [
            "Interstellar",
            "0.94"
          ],
          [
            "Arrival",
            "0.87"
          ],
          [
            "Blade Runner 2049",
            "0.80"
          ]
        ],
        "after_scores": [
          "High-scoring pairs share subject matter and tone — hard science-fiction first contact and exploration — which is exactly what content-based filtering should surface."
        ]
      },
      {
        "h": "What it does",
        "bullets": [
          "**Recommends from content**, so it works before any user history exists.",
          "**Ranks by cosine similarity**, giving a transparent score for every suggestion.",
          "**Explains itself** — the score makes it obvious why two films were paired.",
          "**FastAPI backend** serving the model, with a Streamlit interface on top."
        ]
      },
      {
        "h": "Tech stack",
        "bullets": [
          "**Scikit-learn** — TF-IDF vectorisation and the similarity computation.",
          "**TF-IDF** — turns unstructured movie text into comparable numeric vectors.",
          "**Cosine similarity** — measures how close two films are regardless of text length.",
          "**FastAPI** — serves the model over an HTTP API.",
          "**Streamlit** — the app interface used by the live demo."
        ]
      }
    ],
    "cardPendingLabel": null,
    "cardDesc": "Content-based recommendations using TF-IDF and cosine similarity — Interstellar 0.94 · Arrival 0.87 · Blade Runner 2049 0.80.",
    "cardTags": [
      "Scikit-learn",
      "TF-IDF",
      "FastAPI"
    ],
    "mono": "MOV",
    "cardBadge": "built",
    "chip": "▶ Live demo",
    "timeLabel": "Open app",
    "playAria": "Watch demo of Movie Recommendation System"
  },
  {
    "slug": "work-mental-health",
    "grad": "grad-4",
    "label": "Machine Learning",
    "title": "Mental Health Score Predictor",
    "summary": "A scikit-learn regression model that scores a student's mental health from social media usage, sleep and stress — served behind a validated FastAPI endpoint.",
    "desc": "A scikit-learn mental health score regression model served through FastAPI, taking social media usage, sleep, study hours and stress as inputs.",
    "status": "built",
    "tags": [
      "Scikit-learn",
      "FastAPI",
      "Pandas",
      "Pydantic"
    ],
    "demo": "https://mental-health-score-1-jswj.onrender.com/",
    "github": "https://github.com/theaakashgupta/mental-health-score",
    "also": "Regression over the Student Social Media and Mental Health dataset",
    "sections": [
      {
        "h": "Overview",
        "p": [
          "Social media use and student wellbeing are usually discussed in qualitative terms. This project turns the relationship into a number: given a student's daily habits, the model returns a mental health score.",
          "It is a regression problem, not a classification one — the target is a continuous score rather than a yes/no label. The trained model is serialised with joblib and served behind a FastAPI endpoint with strict input validation."
        ]
      },
      {
        "h": "How it works",
        "flow": [
          [
            "Validate",
            "Incoming data is checked by a Pydantic model — numeric ranges are enforced and categorical fields are restricted to known values."
          ],
          [
            "Assemble",
            "The twelve validated fields are assembled into a single-row Pandas DataFrame with the exact column names the model was trained on."
          ],
          [
            "Group country",
            "Countries outside the top-ten seen in training are folded into a single “Other” group so unseen values cannot skew the prediction."
          ],
          [
            "Predict",
            "The serialised scikit-learn pipeline runs on the row and returns a score, rounded to two decimal places."
          ]
        ]
      },
      {
        "h": "Inputs",
        "bullets": [
          "**Demographics** — age, gender, country and academic level.",
          "**Platform use** — most-used platform, purpose of use, average daily usage hours and daily unlocks.",
          "**Routine** — study hours, physical activity hours and sleep hours per night.",
          "**Stress** — self-reported stress level."
        ],
        "p_after": [
          "Twelve features in total, each range-checked at the API boundary — age between 10 and 100, usage and sleep between 0 and 24 hours — so a malformed request is rejected before it can reach the model."
        ]
      },
      {
        "h": "The API",
        "bullets": [
          "**POST /predict** — accepts a validated student profile and returns the score.",
          "**Typed request and response models** — Pydantic models document the contract and enforce it at runtime.",
          "**Categorical enums** — gender, academic level, platform, purpose and stress level are restricted to the values the model knows.",
          "**JSON responses** — plain JSON, so the model is usable from any client or language."
        ]
      },
      {
        "h": "Tech stack",
        "bullets": [
          "**Scikit-learn** — the regression model and training pipeline.",
          "**Joblib** — serialises the trained model to disk for loading at startup.",
          "**Pandas** — builds the feature row the model expects.",
          "**FastAPI + Pydantic** — validated request handling and the HTTP API.",
          "**Render** — the deployment the live demo runs on."
        ]
      }
    ],
    "cardPendingLabel": null,
    "cardDesc": "A regression model that scores a student's mental health from social media usage, sleep, study hours and stress — served behind a FastAPI endpoint.",
    "cardTags": [
      "Scikit-learn",
      "FastAPI",
      "Pandas"
    ],
    "mono": "MH",
    "cardBadge": "built",
    "chip": "▶ Live demo",
    "timeLabel": "Open app",
    "playAria": "Watch demo of Mental Health Score Predictor"
  },
  {
    "slug": "work-code-review",
    "grad": "grad-5",
    "label": "AI Agent",
    "title": "Code Review Agent",
    "summary": "A LangGraph agent that reads a code snippet and returns a structured review — an analysis, a list of concrete issues, and a written report.",
    "desc": "A LangGraph multi-node code review agent: analyzer, issue finder and report generator backed by Mistral, served through FastAPI with a Next.js frontend.",
    "status": "progress",
    "tags": [
      "LangGraph",
      "FastAPI",
      "Mistral",
      "Next.js"
    ],
    "demo": null,
    "github": null,
    "also": "Three-node LangGraph workflow with a typed shared state",
    "sections": [
      {
        "h": "Overview",
        "p": [
          "A code review agent that takes a snippet and returns the three things a review actually needs: an understanding of what the code does, a list of specific problems, and a written recommendation.",
          "The work is split across three LangGraph nodes rather than one long prompt. Each node has a single job and passes a typed state to the next, which keeps every step inspectable and easy to change on its own."
        ]
      },
      {
        "h": "How it works",
        "flow": [
          [
            "analyzer",
            "Reads the code and produces a brief analysis of its purpose, structure and concerns."
          ],
          [
            "issue_finder",
            "Works from that analysis to list three to five specific issues, each on its own line."
          ],
          [
            "report_generator",
            "Combines the analysis and the issue list into a formatted report with Summary, Issues and Recommendation sections."
          ]
        ],
        "p_after": [
          "The graph is compiled once at startup and invoked per request, so the compiled workflow is reused across calls rather than rebuilt each time."
        ]
      },
      {
        "h": "The state",
        "bullets": [
          "A single **CodeReviewState** TypedDict carries **code**, **initial_analysis**, **issues** and **final_report** between nodes.",
          "Nodes return partial dictionaries, so each one only declares the fields it changes.",
          "The graph is **linear** — analyzer → issue_finder → report_generator → end — which keeps behaviour predictable."
        ]
      },
      {
        "h": "Models, API and frontend",
        "bullets": [
          "**Mistral** — `mistral-small-latest` via LangChain, run at temperature 0 for consistent, repeatable reviews.",
          "**FastAPI** — a single `POST /review` endpoint that seeds the state, invokes the graph and returns analysis, issues and report together.",
          "**Next.js 16 + React 19 + Tailwind 4** — the frontend that sends code and renders the review.",
          "**CORS locked to localhost:3000** — the API only accepts requests from the dev frontend origin."
        ]
      },
      {
        "h": "Status",
        "p": [
          "This build is still in progress. The agent, API and frontend are working locally, and the repository and a hosted demo are still to come."
        ]
      }
    ],
    "cardPendingLabel": "Repo & demo link coming soon",
    "cardDesc": "An AI agent that reviews pull requests automatically — reading diffs, flagging bugs and style issues, leaving structured comments.",
    "cardTags": [
      "LLM",
      "Automation"
    ],
    "mono": "CR",
    "cardBadge": "progress",
    "chip": "Coming soon",
    "timeLabel": "In progress",
    "playAria": ""
  },
  {
    "slug": "work-heart-disease",
    "grad": "grad-6",
    "label": "Machine Learning",
    "title": "Heart Disease Prediction",
    "summary": "A classification model that predicts heart disease risk from patient health metrics — built to support earlier screening.",
    "desc": "A heart disease risk classification model covering data cleaning, feature selection and model evaluation on medical datasets.",
    "status": "progress",
    "tags": [
      "Classification",
      "Healthcare",
      "Scikit-learn"
    ],
    "demo": null,
    "github": null,
    "also": "Binary classification on medical data",
    "sections": [
      {
        "h": "Overview",
        "p": [
          "Cardiovascular risk is often identified late, because the signals that precede it sit scattered across routine health measurements. A classification model gives those measurements a single readable output: predicted risk, yes or no.",
          "This project builds that model end to end, treating the data work as the main problem rather than an afterthought — on medical datasets, what you clean and which features you keep decides the result."
        ]
      },
      {
        "h": "The problem",
        "bullets": [
          "**Scattered signals** — risk factors are spread across several measurements that nobody reviews together.",
          "**Late detection** — by the time symptoms are clear, the opportunity for early intervention has passed.",
          "**Noisy medical data** — missing values, duplicates and inconsistent records have to be handled before training."
        ]
      },
      {
        "h": "Approach",
        "flow": [
          [
            "Clean",
            "Handle missing values, remove duplicates and normalise inconsistent records in the dataset."
          ],
          [
            "Select features",
            "Keep the measurements that actually carry signal and drop the ones that add noise or leak the target."
          ],
          [
            "Train",
            "Fit a classification model on the prepared features."
          ],
          [
            "Evaluate",
            "Measure performance on held-out data rather than on the data the model was trained on."
          ]
        ]
      },
      {
        "h": "Status",
        "p": [
          "This build is still in progress. The repository is not public yet, so there is nothing to link to — it will be added here when it is ready."
        ]
      }
    ],
    "cardPendingLabel": "Repo link coming soon",
    "cardDesc": "A classification model predicting heart disease risk — data cleaning, feature selection and evaluation on medical datasets.",
    "cardTags": [
      "Classification",
      "Healthcare"
    ],
    "mono": "MED",
    "cardBadge": "progress",
    "chip": "Coming soon",
    "timeLabel": "In progress",
    "playAria": ""
  },
  {
    "slug": "work-vyaparsathi",
    "grad": "grad-7",
    "label": "Full Stack",
    "title": "VyaparSathi — Business OS",
    "summary": "A MERN platform that brings billing, inventory, Khata credit and business analytics into one place for India's small businesses — with an AI Artisan Copilot on top.",
    "desc": "A MERN business platform for Indian small businesses: billing, inventory, Khata credit and analytics, with an AI Artisan Copilot for cataloguing, pricing and buyer matching.",
    "status": "built",
    "tags": [
      "MERN",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Recharts"
    ],
    "demo": null,
    "github": "https://github.com/theaakashgupta/vyaparsathi",
    "also": "Smart India Hackathon submission",
    "sections": [
      {
        "h": "Overview",
        "p": [
          "VyaparSathi (व्यापार साथी) is an integrated digital platform for India's small and micro businesses — retailers, wholesalers, service providers and home-based businesses.",
          "The goal was to replace a stack of disconnected tools — a billing pad, a stock notebook, a khata ledger — with one system where a sale updates stock and credit at the same time, and the owner can see revenue, expenses and outstanding credit in a single dashboard.",
          "It was built for the Smart India Hackathon on the MERN stack, with an AI Artisan Copilot added later as a feature layer."
        ]
      },
      {
        "h": "The problem",
        "bullets": [
          "**Manual, error-prone billing** — handwritten bills mean wrong totals and no audit trail.",
          "**No inventory visibility** — stockouts and overstocking are only discovered when a customer is standing at the counter.",
          "**Credit tracked on paper** — khata balances live in a notebook, so nobody can tell who owes what at a glance.",
          "**No single view of the business** — sales, expenses and profit are calculated separately, if at all."
        ]
      },
      {
        "h": "Core modules",
        "bullets": [
          "**Digital billing / POS** — fast tap-to-bill invoicing with automatic tax, discount and total calculation, and auto-generated invoice numbers.",
          "**Inventory management** — real-time stock tracking with low-stock alerts; recording a sale reduces stock automatically.",
          "**Customer and supplier records** — contact details and full transaction history for every counterparty.",
          "**Khata credit management** — the traditional credit notebook, digitised: balances, payments and a ledger per customer.",
          "**Expense tracking** — business expenses logged by category, from rent to salaries to utilities.",
          "**Analytics dashboard** — daily and monthly revenue, estimated profit, outstanding credit, top-selling products and sales-trend charts.",
          "**Secure authentication** — JWT-based login with each business's data fully isolated from every other."
        ]
      },
      {
        "h": "AI Artisan Copilot",
        "p": [
          "The copilot was added as an additive layer — every existing module still works exactly as before. It targets artisans, who historically lose the most from weak cataloguing and poor pricing."
        ],
        "bullets": [
          "**Snap-to-Catalog AI** — upload a product photo and describe it; the copilot generates a name, category, material, craft, description, tags and cultural story.",
          "**Multilingual voice input** — browser speech recognition in English and several Indian-language modes, so cataloguing is not a typing exercise.",
          "**Smart pricing** — a transparent price estimate computed from material cost, labour cost, production time and demand level.",
          "**Market linkage** — recommended buyer segments, target cities and seasonal actions based on the catalog and profile.",
          "**Buyer match** — scores a buyer requirement against craft, price, capacity, location and delivery constraints.",
          "**AI catalog library** — every generated record is saved per authenticated business."
        ],
        "p_after": [
          "The copilot runs in **demo-intelligence mode** with no API key, so the project still works out of the box. Setting an OpenRouter key and model in the backend environment switches on real multimodal analysis of the uploaded photo; if the provider is unreachable it falls back to the deterministic path instead of failing."
        ]
      },
      {
        "h": "How it labels its output",
        "note": [
          "Market linkage results are deliberately presented as **recommendations, not verified buyer leads or live demand statistics**, and pricing results as estimates unless real market data is supplied. The project would rather under-promise than imply marketplace intelligence it has not actually integrated."
        ]
      },
      {
        "h": "Tech stack",
        "bullets": [
          "**React 18 + Vite** — frontend, with React Router for navigation.",
          "**Tailwind CSS** — styling, responsive down to mobile for shop owners on the move.",
          "**Recharts** — the sales-trend and analytics charts.",
          "**Node.js + Express** — RESTful API on an MVC structure with role-based access ready.",
          "**MongoDB + Mongoose** — users, products, customers, sales, payments and expenses.",
          "**JWT + bcrypt** — authentication and password hashing."
        ],
        "p_after": [
          "Recording a sale cascades: stock comes down, an unpaid balance raises the customer's khata, an invoice number is generated, and the dashboard figures update — with no duplicate entry anywhere."
        ]
      }
    ],
    "cardPendingLabel": null,
    "cardDesc": "A MERN platform for Indian small businesses — billing, inventory, Khata credit and analytics, plus an AI Artisan Copilot for snap-to-catalog, smart pricing and buyer matching.",
    "cardTags": [
      "MERN",
      "React",
      "Node.js",
      "MongoDB"
    ],
    "mono": "VS",
    "cardBadge": "built",
    "chip": "Source code",
    "timeLabel": "On GitHub",
    "playAria": ""
  }
];

export const STATUS_TEXT = { built: 'Built', progress: 'In progress' };

export function adjacentProjects(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? projects[i - 1] : null, next: i < projects.length - 1 ? projects[i + 1] : null };
}
