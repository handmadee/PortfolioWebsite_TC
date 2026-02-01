export const personalInfo = {
  name: "Tran Luong Thao Chi",
  dob: "September 6, 2003",
  phone: "(+84) 827.257.786",
  role: {
    en: "Business Analyst",
    vi: "Chuyên Viên Phân Tích Nghiệp Vụ",
    ja: "ビジネスアナリスト"
  },
  education: [
    {
      school: {
        en: "FPT University Da Nang",
        vi: "Đại học FPT Đà Nẵng",
        ja: "FPT大学ダナン"
      },
      degree: {
        en: "Bachelor of Information Technology",
        vi: "Cử nhân Công nghệ Thông tin",
        ja: "情報技術学士"
      },
      year: "2021 - 2025",
      gpa: "3.4/4.0"
    },
    {
      school: {
        en: "Learn with SIA",
        vi: "Learn with SIA",
        ja: "Learn with SIA"
      },
      degree: {
        en: "Rocketship to 1st BA Job Mentorship",
        vi: "Chương trình Mentorship BA",
        ja: "BAメンターシッププログラム"
      },
      year: "06/2024 - 12/2024",
      gpa: null
    }
  ],
  cv: {
    vi: "/assets/cv_vi.pdf",
    ja: "/assets/cv_jp.pdf"
  },
  social: {
    linkedin: "https://linkedin.com/in/tran-luong-thao-chi",
    github: "https://github.com/thaochi",
    email: "tranluongthaochi2003@gmail.com"
  },
  achievements: [
    {
      title: {
        en: "Top 5 SolFest - Technology Solutions",
        vi: "Top 5 SolFest - Giải pháp Công nghệ",
        ja: "Top 5 SolFest - テクノロジーソリューション"
      },
      org: "Google Developer Student Club",
      year: "12/2022"
    },
    {
      title: {
        en: "Top 5 SolFest - Economic Solutions",
        vi: "Top 5 SolFest - Giải pháp Kinh tế",
        ja: "Top 5 SolFest - 経済ソリューション"
      },
      org: "Google Developer Student Club",
      year: "01/2022"
    },
    {
      title: {
        en: "Mini Leadership Conference",
        vi: "Hội nghị Lãnh đạo Mini",
        ja: "ミニリーダーシップカンファレンス"
      },
      org: "AIESEC in Viet Nam",
      year: "12/2021"
    }
  ],
  certifications: [
    "JLPT N3 (Japanese Language Proficiency Test)",
    "TOEIC 500"
  ],
  workExperience: [
    {
      company: {
        en: "HILAB Technology",
        vi: "HILAB Technology",
        ja: "HILAB Technology"
      },
      role: {
        en: "Junior Business Analyst & Presale",
        vi: "Junior BA & Presale",
        ja: "ジュニアBA & プリセールス"
      },
      duration: "07/2024 - Present"
    },
    {
      company: {
        en: "FPT Software",
        vi: "FPT Software",
        ja: "FPT Software"
      },
      role: {
        en: "Intern & Fresher Business Analyst",
        vi: "Intern & Fresher BA",
        ja: "インターン & フレッシャーBA"
      },
      duration: "01/2024 - 06/2024"
    }
  ],
  skills: {
    technical: ["BPMN 2.0", "UML", "SQL (MySQL)", "Figma", "Draw.io", "BPMN.io", "Jira", "Confluence"],
    domain: ["E-commerce", "Logistics", "ERP", "Healthcare", "CRM"],
    soft: ["Requirement Elicitation", "Stakeholder Management", "Critical Thinking", "Agile/Scrum"],
    languages: ["Vietnamese (Native)", "Japanese (N3)", "English (TOEIC 500)"]
  }
};

export const projects = [
  {
    slug: "panda-tech",
    title: {
      en: "PANDA TECH - Logistics ERP System",
      vi: "PANDA TECH - Hệ thống ERP Logistics",
      ja: "PANDA TECH - 物流ERPシステム"
    },
    role: { en: "Business Analyst", vi: "Business Analyst", ja: "ビジネスアナリスト" },
    company: "HILAB Technology",
    duration: "07/2024 - Present",
    desc: {
      en: "Developed a large ERP system to manage logistics for cross-border ordering and shipping services. Includes order management, warehousing, route tracking, delivery coordination, accounting, credit, HRM, revenue management, customer management, and CRM.",
      vi: "Phát triển hệ thống ERP lớn để quản lý logistics cho dịch vụ đặt hàng và vận chuyển xuyên biên giới. Bao gồm quản lý đơn hàng, kho bãi, theo dõi lộ trình, phối hợp giao hàng, kế toán, tín dụng, HRM, quản lý doanh thu, quản lý khách hàng và CRM.",
      ja: "越境注文・配送サービスの物流を管理する大規模ERPシステムを開発。注文管理、倉庫管理、ルート追跡、配送調整、会計、与信、HRM、収益管理、顧客管理、CRMを含む。"
    },
    tech: ["BRD", "SRS", "Use Case", "BPMN", "Figma", "Jira", "Draw.io"],
    challenges: {
      en: [
        { problem: "Manual revenue management was time-consuming.", solution: "Automated processes reducing manual work by 40%." },
        { problem: "High UAT incident rate.", solution: "Requirements validation reduced UAT incidents by 30%." }
      ],
      vi: [
        { problem: "Quản lý doanh thu thủ công tốn thời gian.", solution: "Tự động hóa quy trình giảm 40% công việc thủ công." },
        { problem: "Tỷ lệ lỗi UAT cao.", solution: "Xác thực yêu cầu giảm 30% lỗi UAT." }
      ],
      ja: [
        { problem: "手動の収益管理に時間がかかっていた。", solution: "自動化により手作業を40%削減。" },
        { problem: "UATインシデント率が高かった。", solution: "要件検証によりUATインシデントを30%削減。" }
      ]
    },
    results: {
      en: ["Reduced manual revenue management by 40%", "Reduced UAT incidents by 30%"],
      vi: ["Giảm 40% quản lý doanh thu thủ công", "Giảm 30% lỗi UAT"],
      ja: ["手動の収益管理を40%削減", "UATインシデントを30%削減"]
    }
  },
  {
    slug: "etsy-ecommerce",
    title: { 
      en: "ETSY - E-commerce Integration Platform", 
      vi: "ETSY - Nền tảng Tích hợp E-commerce", 
      ja: "ETSY - Eコマース統合プラットフォーム" 
    },
    role: { en: "Business Analyst", vi: "Business Analyst", ja: "ビジネスアナリスト" },
    company: "HILAB Technology",
    duration: "07/2024 - Present",
    desc: {
      en: "Developed a purchasing system, product listings, and integrated chat for multiple Etsy stores on Chatwoot platform. Each store corresponds to a mailbox containing conversations across platforms, with CRM to manage stores, orders, and customers.",
      vi: "Phát triển hệ thống mua hàng, danh sách sản phẩm và chat tích hợp cho nhiều cửa hàng Etsy trên nền tảng Chatwoot. Mỗi cửa hàng tương ứng với một hộp thư chứa cuộc hội thoại trên nhiều nền tảng, tích hợp CRM quản lý cửa hàng, đơn hàng và khách hàng.",
      ja: "Chatwootプラットフォーム上で複数のEtsyストア向けに購入システム、商品リスト、統合チャットを開発。各ストアは複数プラットフォームの会話を含むメールボックスに対応し、ストア、注文、顧客を管理するCRMを統合。"
    },
    tech: ["BRD", "SRS", "Use Case", "BPMN", "Figma", "Jira", "Chatwoot"],
    challenges: {
      en: [
        { problem: "Slow exchange time between stores and customers.", solution: "Improved UAT efficiency, reducing exchange time by 60%." }
      ],
      vi: [
        { problem: "Thời gian trao đổi giữa cửa hàng và khách hàng chậm.", solution: "Cải thiện hiệu quả UAT, giảm 60% thời gian trao đổi." }
      ],
      ja: [
        { problem: "店舗と顧客間のやり取りに時間がかかっていた。", solution: "UAT効率を改善し、やり取り時間を60%短縮。" }
      ]
    },
    results: {
      en: ["Improved exchange time by 60%", "Multi-store management on single platform"],
      vi: ["Cải thiện 60% thời gian trao đổi", "Quản lý đa cửa hàng trên một nền tảng"],
      ja: ["やり取り時間を60%改善", "単一プラットフォームでのマルチストア管理"]
    }
  },
  {
    slug: "warriors-pod",
    title: { 
      en: "Warriors Holding - Print-on-Demand System", 
      vi: "Warriors Holding - Hệ thống Print-on-Demand", 
      ja: "Warriors Holding - プリントオンデマンドシステム" 
    },
    role: { en: "Business Analyst", vi: "Business Analyst", ja: "ビジネスアナリスト" },
    company: "HILAB Technology",
    duration: "2024",
    desc: {
      en: "Developed a Print-on-Demand (POD) business system integrating APIs across Amazon, Etsy, and Shopify. Centrally manages sales platforms, automates Seller-Designer-Supplier workflow, and records costs per transaction for financial transparency.",
      vi: "Phát triển hệ thống kinh doanh Print-on-Demand (POD) tích hợp APIs từ Amazon, Etsy và Shopify. Quản lý tập trung các nền tảng bán hàng, tự động hóa quy trình Seller-Designer-Supplier và ghi nhận chi phí mỗi giao dịch để minh bạch tài chính.",
      ja: "Amazon、Etsy、ShopifyのAPIを統合したプリントオンデマンド（POD）ビジネスシステムを開発。販売プラットフォームを一元管理し、Seller-Designer-Supplierワークフローを自動化、取引ごとのコストを記録して財務透明性を確保。"
    },
    tech: ["User Story", "Draw.io", "BPMN.io", "Figma", "API Integration"],
    challenges: {
      en: [
        { problem: "Cash flow discrepancies across platforms.", solution: "Implemented per-transaction cost recording for financial transparency." }
      ],
      vi: [
        { problem: "Chênh lệch dòng tiền giữa các nền tảng.", solution: "Triển khai ghi nhận chi phí theo từng giao dịch để minh bạch tài chính." }
      ],
      ja: [
        { problem: "プラットフォーム間でのキャッシュフローの不一致。", solution: "財務透明性のため取引ごとのコスト記録を実装。" }
      ]
    },
    results: {
      en: ["Unified multi-platform management", "Automated Seller-Designer-Supplier workflow"],
      vi: ["Quản lý đa nền tảng thống nhất", "Tự động hóa quy trình Seller-Designer-Supplier"],
      ja: ["マルチプラットフォームの統合管理", "Seller-Designer-Supplierワークフローの自動化"]
    }
  }
];