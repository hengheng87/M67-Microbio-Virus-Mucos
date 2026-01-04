// database/exams.js
// V11.0 架構：ID 決定一切
// 格式：{year}-{type}-{number} (例如: 113-final-01)

const pastExamDB = [
    // === 113 學年度 ===
    {
        id: "113-final-01",
        relatedPathogen: "general_virology",
        type: "mechanism",
        question: "病毒最常利用下列何種蛋白質進行吸附步驟？(What type of protein do viruses most commonly use to carry out the attachment step?)",
        options: [
            "(A) 基質蛋白 (Matrix protein)",
            "(B) 蛋白水解酶 (Protease)",
            "(C) 棘蛋白 (Spike protein)",
            "(D) 核心蛋白 (Core protein)"
        ],
        correctAnswer: "", 
        userNote: ""
    },
    {
        id: "113-final-02",
        relatedPathogen: "general_virology",
        type: "mechanism",
        question: "下列何者是正確的病毒複製步驟？(Which of the following is the correct step in the viral replication process?) \n步驟代號：(1)去殼 (uncoating) (2)認識目標細胞 (recognition)/附著 (attachment) (3)巨分子合成 (macromolecule synthesis) (4)穿入 (penetration) (5)病毒組合 (assembly) (6)病毒釋出 (release)",
        options: [
            "(A) 241356",
            "(B) 123456",
            "(C) 132456",
            "(D) 214356"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-03",
        relatedPathogen: "immunology",
        type: "mechanism",
        question: "下列那一個最有可能是病毒感染引發「全身性類感冒症狀 (flu-like systemic symptom)」之因子？",
        options: [
            "(A) T細胞 (T cells)",
            "(B) 干擾素或細胞激素 (Interferon or cytokine)",
            "(C) 抗體 (Antibody)",
            "(D) 免疫複合物 (Immune complex)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-04",
        relatedPathogen: "lab_diagnosis",
        type: "basic",
        question: "下列何種技術或系統無法用來進行病毒的培養？",
        options: [
            "(A) 活體實驗動物 (Live experimental animal)",
            "(B) 雞胚胎蛋 (Embryonated chicken egg)",
            "(C) 初代細胞培養 (Primary cell culture)",
            "(D) 血液瓊脂 (Blood agar)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-05",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "下列有關抗病毒藥物之敘述，何者最不適當？",
        options: [
            "(A) Indinavir 常用來治療單純疱疹病毒 (herpes simplex virus) 之感染",
            "(B) Ribavirin 合併干擾素 (interferon) 可用於治療 C 型肝炎病毒之感染",
            "(C) 被狂犬病動物咬到之病人，必須施打馬或人之抗狂犬病病毒血清或免疫球蛋白",
            "(D) Amantadine 可抑制 A 型流行性感冒病毒 (influenza A virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-06",
        relatedPathogen: "prion",
        type: "clinical",
        question: "目前科學家認為克魯氏症 (Kuru) 是由 prion 所致的人類疾病，下列敘述何者正確？",
        options: [
            "(A) Kuru 類似典型的帕金森疾病，限於老人",
            "(B) Kuru 是一種人類退化性傳染性海綿狀腦病 (transmissible spongiform encephalopathy)",
            "(C) 食物經高溫烹煮後再食用，可避免此疾病的傳播",
            "(D) 此疾病的傳染途徑和庫賈氏症 (CJD) 的傳染途徑相同"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-07",
        relatedPathogen: "hpv",
        type: "clinical",
        question: "下列有關人類乳突狀瘤病毒 (HPV) 的敘述，何者最不適當？",
        options: [
            "(A) 是一種常見的性行為傳染疾病",
            "(B) 高危險型 HPV 可能導致肛門癌",
            "(C) 會藉由產道由媽媽傳給小孩",
            "(D) 可感染人類的黏膜和皮膚，多數感染者均有明顯症狀"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-08",
        relatedPathogen: "rabies",
        type: "virology",
        question: "下列有關狂犬病毒 (rabies virus) 的敘述，何者錯誤？",
        options: [
            "(A) 為具套膜的單股負股 RNA 病毒",
            "(B) 可用 PCR 在被感染動物的口水中偵測病毒",
            "(C) 狂犬病毒可引起恐水症 (hydrophobia)",
            "(D) 病毒主要在中樞神經系統大量複製並破壞，不會散播到其它器官或腺體"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-09",
        relatedPathogen: "picornavirus",
        type: "virology",
        question: "腸病毒 (Enterovirus) 與鼻病毒 (Rhinovirus) 同屬小 RNA 病毒科 (Picornaviridae)，下列敘述何者錯誤？",
        options: [
            "(A) 兩者皆在細胞質內複製及組裝",
            "(B) 兩者皆對酒精處理有抗性",
            "(C) 兩者皆是單股正股 RNA 病毒",
            "(D) 兩者皆抗酸"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-10",
        relatedPathogen: "hsv",
        type: "clinical",
        question: "下列關於單純疱疹病毒一型 (HSV-1) 感染所引起的病症之敘述，何者正確？",
        options: [
            "(A) 大部分的原發性疱疹齦口炎發生在 70 歲以上的患者",
            "(B) 再發性疱疹感染 (Recurrent herpetic infection) 只出現在下唇黏膜",
            "(C) 一般成年人感染後較不可能出現腹瀉",
            "(D) 在組織病理切片上可以看見 koilocytes，是其診斷特徵"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-11",
        relatedPathogen: "vzv",
        type: "clinical",
        question: "下列有關水痘帶狀疱疹病毒 (VZV) 及其疾病之敘述，何者錯誤？",
        options: [
            "(A) VZV 屬於疱疹病毒 (herpesvirus) 中的一員，其基因體為 DNA",
            "(B) VZV 感染可能會造成孩童有水痘，成人患者有帶狀疱疹的臨床症狀",
            "(C) Acyclovir 不可用於治療 VZV 感染",
            "(D) 施打減毒疫苗可以預防感染"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-12",
        relatedPathogen: "ebv",
        type: "clinical",
        question: "下列有關 Epstein-Barr virus (EB virus) 之敘述，何者錯誤？",
        options: [
            "(A) 感染過 EB virus 的人非常少",
            "(B) Early antigen EA-R 的產生是顯示 EBV 進入 lytic cycle 的第一個徵象",
            "(C) 感染後可能造成發燒、喉嚨痛、淋巴結腫大等症狀",
            "(D) 可能經由跟別人共食或接吻而傳染"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-13",
        relatedPathogen: "poxvirus",
        type: "clinical",
        question: "下列有關 M 痘 (Mpox) 的敘述，何者最適當？",
        options: [
            "(A) 由天花病毒 (smallpox virus) 所引起",
            "(B) 只會由感染 M 痘的猴子傳染給人",
            "(C) 接種減弱天花病毒株製成之疫苗可減低得到 M 痘的機會",
            "(D) M 痘病毒感染也造成傳染性濕疣 (molluscum contagiosum)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-14",
        relatedPathogen: "polio",
        type: "epidemiology",
        question: "下列有關野生株小兒麻痺病毒的敘述，何者最不合適？",
        options: [
            "(A) 屬於微小 RNA 病毒科 (Picornaviridae)",
            "(B) 感染後若造成脊髓灰質炎 (poliomyelitis)，致死率可到 2~5%",
            "(C) 感染多年後仍有可能發生後小兒麻痺症狀 (post-polio syndrome)",
            "(D) 在大多數國家仍可發現野生株小兒麻痺病毒"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-15",
        relatedPathogen: "parvo",
        type: "virology",
        question: "下列有關小病毒 B19 (parvovirus B19) 的敘述，何者最適當？",
        options: [
            "(A) 為雙股 DNA 病毒",
            "(B) 主要傳播途徑為糞口傳染",
            "(C) 感染並引起紅血球的先驅細胞 (erythroid precursor) 溶解",
            "(D) 感染兒童時，造成嬰兒玫瑰疹"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-16",
        relatedPathogen: "rna_retro",
        type: "virology",
        question: "有關反轉錄病毒 (retrovirus) 的敘述，何者最不適當？",
        options: [
            "(A) 原病毒 (Provirus) 只出現在其宿主細胞染色體固定的位置",
            "(B) 反轉錄酶可以利用 cDNA 為模板合成雙股 DNA",
            "(C) 在病毒顆粒中基因體具有兩套 (two copies) 單股 RNA",
            "(D) 病毒顆粒中帶有反轉錄病毒酶 (reverse transcriptase)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-17",
        relatedPathogen: "dna_adeno",
        type: "clinical",
        question: "下列何種病毒最可能引發咽喉結膜熱 (pharyngoconjunctival fever)？",
        options: [
            "(A) 人類疱疹病毒第 7 型 (Human herpesvirus 7)",
            "(B) Epstein-Barr virus",
            "(C) 單純疱疹病毒第一型 (Herpes simplex virus type 1)",
            "(D) 腺病毒 (Adenovirus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-18",
        relatedPathogen: "dna_pap_poly",
        type: "clinical",
        question: "進行性多灶性白質腦病 (Progressive multifocal leukoencephalopathy) 是一種髓鞘脫失 (demyelination) 的病變，臨床上常與免疫抑制有關。此病主要由何種病毒引起？",
        options: [
            "(A) 日本腦炎病毒 (Japanese encephalitis virus)",
            "(B) BK virus",
            "(C) 小病毒 B19 (Parvovirus B19)",
            "(D) JC virus"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-19",
        relatedPathogen: "dna_herpes",
        type: "mechanism",
        question: "Epstein-Barr virus 可導致下列何種細胞的不死化 (immortalization)？",
        options: [
            "(A) T 淋巴球 (T lymphocytes)",
            "(B) 上皮細胞 (Epithelial cells)",
            "(C) B 淋巴球 (B lymphocyte)",
            "(D) 單核球 (Monocytes)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-20",
        relatedPathogen: "rna_retro",
        type: "clinical",
        question: "下列何種症狀最可能為人類免疫缺陷病毒 (HIV) 感染或罹患愛滋病 (AIDS)？",
        options: [
            "(A) 28 歲的男性，有持續性的咳嗽",
            "(B) 44 歲的女性，舌側緣有毛狀白斑 (hairy leukoplakia)",
            "(C) 81 歲的男性，患有帕金森病、高血壓與糖尿病",
            "(D) 65 歲女性，戴上顎全口假牙，有義齒性口炎"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-21",
        relatedPathogen: "rna_retro",
        type: "mechanism",
        question: "人類免疫缺陷病毒 (HIV) 最主要是殺死下列何種細胞而導致愛滋病 (AIDS)？",
        options: [
            "(A) B 細胞 (B cells)",
            "(B) 單核球 (Monocytes)",
            "(C) 含 CD4 的 T 細胞 (CD4-positive T cells)",
            "(D) 含 CD8 的 T 細胞 (CD8-positive T cells)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-22",
        relatedPathogen: "rna_picorna",
        type: "clinical",
        question: "下列何者與引起疱疹性咽喉炎 (herpangina) 及手足口病 (hand-foot-and-mouth disease) 的致病原最相關？",
        options: [
            "(A) 水痘帶狀病毒 (Varicella-zoster virus)",
            "(B) 單純疱疹病毒 (Herpes simplex virus)",
            "(C) Epstein-Barr virus",
            "(D) 柯沙奇病毒 (Coxsackievirus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-23",
        relatedPathogen: "rna_reo",
        type: "clinical",
        question: "在托育中心的一歲男嬰，持續兩天水瀉並嘔吐，且有輕微發燒現象，之後因為脫水而住院。他最可能受到下列何種病毒的感染？",
        options: [
            "(A) 輪狀病毒 (Rotavirus)",
            "(B) 流感病毒 (Influenza virus)",
            "(C) B 型肝炎病毒 (Hepatitis B virus)",
            "(D) Epstein-Barr virus"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-24",
        relatedPathogen: "general_virology",
        type: "clinical",
        question: "下列何種病毒感染不會引發胎兒的先天性缺陷？",
        options: [
            "(A) 人類巨細胞病毒 (Human cytomegalovirus)",
            "(B) 小病毒 B19 (Parvovirus B19)",
            "(C) 人類乳突狀瘤病毒 (Human papillomavirus)",
            "(D) 德國麻疹病毒 (Rubella virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-25",
        relatedPathogen: "dna_parvo",
        type: "clinical",
        question: "下列何種病毒感染最有可能造成關節炎的症狀？",
        options: [
            "(A) 人類巨細胞病毒 (Human cytomegalovirus)",
            "(B) Epstein-Barr virus",
            "(C) 人類乳突狀瘤病毒 (Human papillomavirus)",
            "(D) 小病毒 B19 (Parvovirus B19)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-26",
        relatedPathogen: "prion",
        type: "diagnosis",
        question: "一種新的檢驗方式稱作“real-time quaking-induced conversion (RT-QuIC)”，可以快速檢驗出檢體內是否含有 PrPSc。請問這是利用 prion 的那一種特性？",
        options: [
            "(A) PrPC 會聚集成纖絲 (prion fibril)",
            "(B) PrPSc 會聚集成纖絲 (prion fibril)",
            "(C) PrPSc 會將 PrPC 轉換成 PrPSc",
            "(D) PrPSc 的蛋白質半衰期較 PrPC 短"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-27",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "Acyclovir 可抑制下列何者之功能？",
        options: [
            "(A) 胸腺嘧啶激酶 (Thymidine kinase)",
            "(B) 病毒的 DNA 聚合酶 (Viral DNA polymerase)",
            "(C) 神經胺酸酶 (Neuraminidase)",
            "(D) 血球凝集素 (Hemagglutinin)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-28",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "下列何種藥物可用來抑制第一型人類免疫缺乏病毒 (HIV-1) 最終組裝 (assembly) 和成熟 (maturation) 步驟所需的酵素活性？",
        options: [
            "(A) 反轉錄酶抑制劑 (Reverse transcriptase inhibitor)",
            "(B) 蛋白酶抑制劑 (Protease inhibitor)",
            "(C) 融合抑制劑 (Fusion inhibitor)",
            "(D) 嵌入酶抑制劑 (Integrase inhibitor)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-29",
        relatedPathogen: "dna_pap_poly",
        type: "vaccine",
        question: "下列有關人類乳突狀瘤病毒 (human papillomavirus) 疫苗的敘述，何者錯誤？",
        options: [
            "(A) 為 virus-like particle (VLP) 疫苗",
            "(B) 目前劑型大多皆由肌肉注射",
            "(C) 通常會含有血清型第 6, 11, 16, 18 型等病毒",
            "(D) 可預防子宮頸癌"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-30",
        relatedPathogen: "general_virology",
        type: "clinical",
        question: "下列病毒中，何者引起的主要臨床表徵是因其會造成潛伏感染 (latent infection)，感染並潛藏在感覺神經元細胞內所致？\n①單純疱疹病毒 (Herpes simplex virus) ②脊髓灰質炎病毒 (Poliovirus) ③ 水痘帶狀皰疹病毒 (Varicella-zoster virus)",
        options: [
            "(A) 123",
            "(B) 僅①②",
            "(C) 僅②③",
            "(D) 僅①③"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-31",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列哪些病毒對乾洗手 (含有 70% 酒精) 的處理有抗性？\n①克沙奇病毒 (Coxsackievirus) ②輪狀病毒 (Rotavirus) ③ 水痘帶狀疱疹病毒 (VZV) ④ E 型肝炎病毒 (Hepatitis E virus)",
        options: [
            "(A) 123",
            "(B) 234",
            "(C) 124",
            "(D) 1234"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-32",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 D 型肝炎病毒的敘述，何者錯誤？",
        options: [
            "(A) HDV 可藉由施打 B 型肝炎疫苗來預防感染",
            "(B) 主要藉由糞口傳染",
            "(C) 在分類上屬於 deltavirus",
            "(D) 目前沒有以 D 型肝炎病毒為標的的有效治療方式"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-33",
        relatedPathogen: "rna_ortho",
        type: "virology",
        question: "下列有關流感病毒 (influenza virus) 的敘述，何者錯誤？",
        options: [
            "(A) 利用 NP 與 M1 蛋白的差異，來區別流感病毒 A、B、C 三型",
            "(B) 利用 HA 與 NA 蛋白的差異，來區別 A 型流感病毒的亞型",
            "(C) B 型很容易發生抗原移行 (Antigenic shift)",
            "(D) 流感疫苗可預防 A 及 B 型病毒株感染"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-34",
        relatedPathogen: "general_virology",
        type: "epidemiology",
        question: "下列那幾種病毒不經由動物暨節肢動物而傳播？\n①漢他病毒 (Hantavirus) ②日本腦炎病毒 (JEV) ③黃熱病病毒 (Yellow fever virus) ④德國麻疹病毒 (Rubella virus)",
        options: [
            "(A) 14",
            "(B) 12",
            "(C) 34",
            "(D) 24"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-35",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者不是負股 RNA 病毒？",
        options: [
            "(A) 登革熱病毒 (dengue virus)",
            "(B) 伊波拉病毒 (Ebola virus)",
            "(C) 副流感病毒 (parainfluenza virus)",
            "(D) 流感病毒 (influenza virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-36",
        relatedPathogen: "rna_paramyxo",
        type: "virology",
        question: "下列何者是流行性感冒病毒 (Influenza virus) 和副流行性感冒病毒 (Parainfluenza virus) 的不同點？",
        options: [
            "(A) 前者為正股 RNA 病毒，後者為負股 RNA 病毒",
            "(B) 前者為負股 RNA 病毒，後者為正股 RNA 病毒",
            "(C) 前者在細胞核複製，後者是在細胞質複製",
            "(D) 前者的基因體是不分段型，後者是分段型"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-37",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "罹患慢性 B 型肝炎 (chronic hepatitis B) 的孕婦，若是測到以下哪一種抗原呈現陽性，則其新生兒必須在出生 24 小時內接受 B 型肝炎免疫球蛋白注射一劑，然後再按時接受疫苗注射？",
        options: [
            "(A) HBsAg",
            "(B) HBeAg",
            "(C) HBcAg",
            "(D) Anti-HBs"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-38",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "構成真菌細胞壁之主要成分為何？",
        options: [
            "(A) 幾丁質以及 α-1-4-葡萄聚醣",
            "(B) 幾丁質以及 β-1-3-葡萄聚醣",
            "(C) 肽醣以及 β-1-4-葡萄聚醣",
            "(D) 幾丁質以及 α-1-6-葡萄聚醣"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-39",
        relatedPathogen: "myco_pharma",
        type: "pharmacology",
        question: "下列何種抗黴菌藥物，其作用機轉是和黴菌細胞膜之麥角脂醇 (ergosterol) 結合，造成黴菌細胞內容物流出而殺死黴菌？",
        options: [
            "(A) Ketoconazole",
            "(B) Griseofulvin",
            "(C) Amphotericin B",
            "(D) Echinocandins"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-40",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "下列有關日本腦炎病毒與登革熱病毒特性之敘述，何者正確？",
        options: [
            "(A) 均可注射疫苗，預防感染",
            "(B) 被感染之宿主可再直接散播病毒",
            "(C) 均由埃及斑蚊傳播",
            "(D) 感染後均產生感冒般症狀"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-41",
        relatedPathogen: "general_virology",
        type: "immunology",
        question: "感染下列那些病毒後，病人可獲得終身免疫力？\n①麻疹病毒 (Measles virus) ②單純疱疹病毒 (Herpes simplex virus) ③腺病毒 (Adenovirus) ④腮腺炎病毒 (Mumps virus)",
        options: [
            "(A) 14",
            "(B) 34",
            "(C) 13",
            "(D) 12"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-42",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 E 型肝炎病毒的敘述，何者最適當？",
        options: [
            "(A) 為不具外套膜之病毒",
            "(B) 病毒顆粒帶有一個約 7.2kb 的負股 RNA 基因组",
            "(C) 只有兩種基因型的 HEV 可以感染人類",
            "(D) 此類病毒不會感染豬"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-43",
        relatedPathogen: "rna_paramyxo",
        type: "clinical",
        question: "下列何種病毒，會引起睪丸、卵巢、胰臟等腺體發炎之病症？",
        options: [
            "(A) 麻疹病毒 (Measles virus)",
            "(B) 呼吸道融合病毒 (Respiratory syncytial virus)",
            "(C) 副流行性感冒病毒 (Parainfluenza virus)",
            "(D) 腮腺炎病毒 (Mumps virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-44",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "病患若先感染 B 型肝炎病毒後，再感染下列何種肝炎病毒，極易引發猛爆性肝炎？",
        options: [
            "(A) A 型 (HAV)",
            "(B) C 型 (HCV)",
            "(C) D 型 (HDV)",
            "(D) E 型 (HEV)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-45",
        relatedPathogen: "rna_paramyxo",
        type: "clinical",
        question: "一名兩歲幼童出現發高燒、咳嗽、流鼻水、結膜炎及皮膚出現紅疹/皮疹的現象，他的媽媽說幾位同班同學在幾天前也出現這些症狀。請問造成這個孩子的疾病及病原的描述，何者不正確？",
        options: [
            "(A) 該病毒感染與青少年糖尿病有關",
            "(B) 紅疹/皮疹會先出現在臉，之後再散佈到軀幹",
            "(C) 該疾病可用 MMR 疫苗加以預防",
            "(D) 患者口腔內會出現柯氏斑點 (Koplik spots)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-46",
        relatedPathogen: "myco_superficial",
        type: "clinical",
        question: "有關花斑癬 (pityriasis versicolor) 之敘述，下列何者錯誤？",
        options: [
            "(A) 最常見於年輕人",
            "(B) 致病原為馬拉色菌綜合菌 (Malassezia furfur complex)",
            "(C) 致病原未歸類為自然界腐生菌",
            "(D) 無法由檢體直接做鏡檢診斷"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-47",
        relatedPathogen: "general_virology",
        type: "vaccine",
        question: "下列何種病毒目前尚無有效的疫苗可以預防感染？",
        options: [
            "(A) 小兒麻痺病毒 (Poliovirus)",
            "(B) 登革熱病毒 (Dengue virus)",
            "(C) 麻疹病毒 (Measles virus)",
            "(D) 流行性感冒病毒 (Influenza virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-48",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "下列關於馬堡病毒 (Marburg virus) 和伊波拉病毒 (Ebola virus) 之敘述，何者正確？",
        options: [
            "(A) 伊波拉病毒為飲食傳播",
            "(B) 馬堡病毒有 2 種亞型",
            "(C) 兩者皆屬於絲狀病毒科 (Filoviridae)",
            "(D) 兩者皆為生物安全等級第三級"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-49",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "有關黴菌 (fungus) 的敘述，下列何者錯誤？",
        options: [
            "(A) 有典型的細胞核",
            "(B) 細胞壁特有成分是幾丁質",
            "(C) 最適生長 pH 值為微酸環境",
            "(D) 最適生長溫度為 37℃"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "113-final-50",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "真菌之無性孢子 (asexual spores) 可分成那兩大類？",
        options: [
            "(A) 分生孢子 (conidia) 及囊孢子 (sporangiospores)",
            "(B) 瓶孢子 (phialides) 及分節孢子 (arthrospores)",
            "(C) 厚膜孢子 (chlamydospores) 及分節孢子 (arthrospores)",
            "(D) 分節孢子 (arthrospores) 及芽生孢子 (blastospores)"
        ],
        correctAnswer: "",
        userNote: ""
    },

    // === 112 學年度 ===
    {
        id: "112-final-01",
        relatedPathogen: "rna_retro",
        type: "clinical",
        question: "下列有關人類免疫缺陷病毒 (HIV) 及愛滋病 (AIDS) 的敘述，何者是錯誤的?",
        options: [
            "(A) 與愛滋病患者日常生活的接觸不是 HIV 的傳染途徑",
            "(B) 罹患愛滋病的母親盡量避免哺育母乳，以免感染孩子",
            "(C) HIV 感染後一星期之內血清中可以測到 HIV 抗體",
            "(D) 目前利用 HAART 療法 (雞尾酒療法) 可以延緩抗藥性病毒株的出現"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-02",
        relatedPathogen: "rna_retro",
        type: "virology",
        question: "下列何種不是人類免疫缺陷病毒 (HIV) 感染的細胞種類?",
        options: [
            "(A) CD4 T 細胞 (CD4 T cells)",
            "(B) 嗜中性白血球 (Neutrophils)",
            "(C) 巨噬細胞 (Macrophages)",
            "(D) 樹突細胞 (Dendritic cells)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-03",
        relatedPathogen: "rna_retro",
        type: "virology",
        question: "HIV 會因為對細胞親和性的不同，而區分為 X4 strain 或 R5 strain。請問下列哪一個基因的點突變，會改變 HIV 對細胞的親和性?",
        options: [
            "(A) env",
            "(B) gag",
            "(C) tat",
            "(D) pol"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-04",
        relatedPathogen: "rna_retro",
        type: "diagnosis",
        question: "下列有關人類免疫缺陷病毒 (HIV) 檢測的描述，何者錯誤?",
        options: [
            "(A) 可以用 ELISA 做血清抗體的篩檢",
            "(B) 通常可用 Western blot 為確認試驗",
            "(C) 通常會檢測 CD4 細胞中的 HIV RNA 數量，來決定治療效果",
            "(D) 在血清抗體空窗期可以檢測病毒之核酸或 p24 抗原"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-05",
        relatedPathogen: "rna_retro",
        type: "clinical",
        question: "下列有關成人 T 細胞白血病 (adult T-cell leukemia) 的敘述，何者正確?",
        options: [
            "(A) 會經由呼吸道飛沫或糞口傳播",
            "(B) 血液中癌化的 T 細胞內可檢測到 HTLV-1 的機率很高",
            "(C) 隨著病程進展，血液中 CD4+ 細胞的數量越來越少",
            "(D) AZT 可以延緩病程，減低死亡率"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-06",
        relatedPathogen: "poxvirus",
        type: "virology",
        question: "下列有關痘病毒 (poxvirus) 的敘述，何者正確?",
        options: [
            "(A) 天花 (smallpox) 的撲滅，是因為全面接種牛痘病毒 (cowpox) 的減毒疫苗",
            "(B) 傳染性軟疣病毒 (Molluscum contagiosum virus) 會造成人畜感染，也會造成人傳人",
            "(C) Orf 病毒會造成人畜感染，也會造成人傳人",
            "(D) 猴痘病毒 (Mpox virus) 會造成人畜感染，也會造成人傳人"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-07",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 D 型肝炎病毒的敘述，何者錯誤?",
        options: [
            "(A) HDV 的基因體為雙股 RNA",
            "(B) HD antigen 是 D 型肝炎病毒唯一會表現的蛋白質",
            "(C) 在分類上屬於 deltavirus",
            "(D) 目前沒有以 D 型肝炎病毒為標的的有效治療方式"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-08",
        relatedPathogen: "rna_ortho",
        type: "virology",
        question: "下列有關流感病毒 (influenza virus) 的敘述，何者錯誤?",
        options: [
            "(A) 利用 NP 與 M1 蛋白的差異，來區分流感病毒 A、B、C 三型",
            "(B) 利用 HA 與 NA 蛋白的差異，來區分 A 型流感病毒的亞型",
            "(C) A、B、C 三型中，抗原變異最大的是 A 型",
            "(D) C 型曾造成大流行"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-09",
        relatedPathogen: "general_virology",
        type: "epidemiology",
        question: "下列哪幾種病毒可經由動物暨節肢動物而傳播? \n①漢他病毒 (hantavirus) \n②日本腦炎病毒 (Japanese encephalitis virus) \n③黃熱病病毒 (yellow fever virus) \n④狂犬病病毒 (rabies virus)",
        options: [
            "(A) 1, 2",
            "(B) 2, 3",
            "(C) 3, 4",
            "(D) 2, 4"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-10",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者不是負股 RNA 病毒?",
        options: [
            "(A) 流感病毒 (influenza virus)",
            "(B) 伊波拉病毒 (Ebola virus)",
            "(C) 狂犬病毒 (rabies virus)",
            "(D) 登革熱病毒 (dengue virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-11",
        relatedPathogen: "rna_paramyxo",
        type: "virology",
        question: "下列何者是流行性感冒病毒 (Influenza virus) 和副流行性感冒病毒 (Parainfluenza virus) 的不同點?",
        options: [
            "(A) 前者為正股 RNA 病毒，後者為負股 RNA 病毒",
            "(B) 前者為負股 RNA 病毒，後者為正股 RNA 病毒",
            "(C) 前者在細胞核複製，後者是在細胞質複製",
            "(D) 前者的基因體是不分段型，後者是分段型"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-12",
        relatedPathogen: "general_virology",
        type: "safety",
        question: "有關生物安全等級-3 (BSL-3) 實驗室設計上的防護，下列敘述何者錯誤?",
        options: [
            "(A) 實驗室與走廊通道有物理性分隔",
            "(B) 具備可自動關的雙門，且雙門不會同時打開",
            "(C) 排放的廢氣不再循環",
            "(D) 正壓氣流進入實驗室"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-13",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "構成真菌細胞壁之主要成分為何?",
        options: [
            "(A) 幾丁質以及 α-1-4-葡萄聚醣",
            "(B) 幾丁質以及 β-1-3-葡萄聚醣",
            "(C) 肽醣以及 β-1-4-葡萄聚醣",
            "(D) 幾丁質以及 α-1-6-葡萄聚醣"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-14",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者不是 Bunyaviruses 與 Arenaviruses 共同具有的特性?",
        options: [
            "(A) 為人畜共同傳染的病毒",
            "(B) 基因體為片段 RNA 組成",
            "(C) 可能造成出血熱",
            "(D) 二者病毒顆粒中都沒有包裹核糖體"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-15",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "下列有關日本腦炎病毒與登革熱病毒特性之敘述，何者正確?",
        options: [
            "(A) 均可注射疫苗，預防感染",
            "(B) 被感染之宿主可再直接散播病毒",
            "(C) 均由埃及斑蚊傳播",
            "(D) 感染後均產生感冒般症狀"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-16",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列有關 E 型肝炎病毒的敘述，何者最適當?",
        options: [
            "(A) 為不具外套膜之病毒",
            "(B) 病毒顆粒帶有一個約 7.2kb 的負股 RNA 基因組",
            "(C) 只有兩種基因型的 HEV 可以感染人類",
            "(D) 此類病毒不會感染豬"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-17",
        relatedPathogen: "immunology",
        type: "vaccine",
        question: "感染下列哪些病毒後，病人可獲得終身免疫力? \n①麻疹病毒 (Measles virus) \n②單純疱疹病毒 (Herpes simplex virus) \n③腺病毒 (Adenovirus) \n④腮腺炎病毒 (Mumps virus)",
        options: [
            "(A) 1, 2",
            "(B) 3, 4",
            "(C) 1, 3",
            "(D) 1, 4"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-18",
        relatedPathogen: "rna_paramyxo",
        type: "clinical",
        question: "下列何種病毒，會引起睪丸、卵巢、胰臟等腺體發炎之病症?",
        options: [
            "(A) 麻疹病毒 (Measles virus)",
            "(B) 呼吸道融合病毒 (Respiratory syncytial virus)",
            "(C) 副流行性感冒病毒 (Parainfluenza virus)",
            "(D) 腮腺炎病毒 (Mumps virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-19",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "病患若先感染 B 型肝炎病毒後，再感染下列何種肝炎病毒，極易引發猛爆性肝炎?",
        options: [
            "(A) A 型 (HAV)",
            "(B) C 型 (HCV)",
            "(C) D 型 (HDV)",
            "(D) E 型 (HEV)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-20",
        relatedPathogen: "rna_ortho",
        type: "epidemiology",
        question: "下列有關流感病毒的敘述，何者正確?",
        options: [
            "(A) 目前抗病毒藥物克流感僅可用來治療 A 型流感病毒感染",
            "(B) A 型流感病毒可能因為不同亞型的基因片段互換造成抗原移位 (Antigenic shift)",
            "(C) 高病原性禽流感病毒 A (H5N1) 亞型無法感染人類",
            "(D) 犬類不會被 A 型流感病毒感染"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-21",
        relatedPathogen: "myco_superficial",
        type: "clinical",
        question: "有關花斑癬 (pityriasis versicolor) 之敘述，下列何者錯誤?",
        options: [
            "(A) 最常見於年輕人",
            "(B) 致病原為粃糠馬拉色菌綜合菌 (Malassezia furfur complex)",
            "(C) 致病原未歸類為自然界腐生菌",
            "(D) 無法由檢體直接做鏡檢診斷"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-22",
        relatedPathogen: "vaccine",
        type: "vaccine",
        question: "下列何種病毒目前尚無有效的疫苗可以預防感染?",
        options: [
            "(A) 小兒麻痺病毒 (Poliovirus)",
            "(B) 登革熱病毒 (Dengue virus)",
            "(C) 麻疹病毒 (Measles virus)",
            "(D) 流行性感冒病毒 (Influenza virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-23",
        relatedPathogen: "rna_ortho",
        type: "clinical",
        question: "感染下列何種病毒，若自行服用阿斯匹靈 (aspirin) 等水楊酸類退燒藥物後，最易增加兒童罹患雷氏症候群 (Reye syndrome) 的風險?",
        options: [
            "(A) 德國麻疹病毒 (Rubella virus)",
            "(B) 麻疹病毒 (Measles virus)",
            "(C) 流感病毒 (Influenza virus)",
            "(D) 狂犬病病毒 (Rabies virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-24",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "有關登革病毒之敘述，下列何者正確?",
        options: [
            "(A) 屬於 Bunyaviridae",
            "(B) 可造成休克症狀",
            "(C) 含有三個血清型別",
            "(D) 所含之病毒基因體為負股 RNA 片段"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-25",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "真菌之無性孢子 (asexual spores) 可分為哪兩大類?",
        options: [
            "(A) 分生孢子 (conidia) 及囊孢子 (sporangiospores)",
            "(B) 瓶孢子 (phialides) 及分節孢子 (arthrospores)",
            "(C) 厚膜孢子 (chlamydospores) 及分節孢子 (arthrospores)",
            "(D) 分節孢子 (arthrospores) 及芽生孢子 (blastospores)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-26",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列哪一類病毒對酒精敏感，而且病毒顆粒內必須攜帶 RNA-dependent RNA polymerase?",
        options: [
            "(A) Enveloped ssRNA(+)",
            "(B) Enveloped ssRNA(-)",
            "(C) Non-enveloped ssRNA(+)",
            "(D) Non-enveloped ssRNA(-)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-27",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列有關病毒的敘述，何者最適當?",
        options: [
            "(A) 病毒複製的速率是以等比級數方式增加",
            "(B) 所有 RNA 病毒均在寄主細胞質中完成複製工作",
            "(C) RNA 病毒複製時，基因體的複製錯誤率大於 DNA 病毒",
            "(D) 新冠肺炎病毒 (SARS-CoV-2) 對環境的耐受性比腸病毒 (enterovirus) 強"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-28",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列有關病毒與細胞受體的配對，何者正確? \n1. Epstein-Barr: CD4 \n2. Rhinovirus: ICAM-1 \n3. Rabies virus: acetylcholine receptor \n4. B19 virus: Erythrocyte P antigen",
        options: [
            "(A) 1, 3, 4",
            "(B) 1, 2, 3, 4",
            "(C) 2, 3, 4",
            "(D) 2, 3"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-29",
        relatedPathogen: "hepatitis",
        type: "diagnosis",
        question: "以下有關實驗室檢驗的描述，何者不正確?",
        options: [
            "(A) B 型肝炎病毒表面抗原呈現陽性，代表受試者為 B 型肝炎患者",
            "(B) B 型肝炎病毒表面抗體呈現陽性，代表受試者對 B 型肝炎病毒有免疫力",
            "(C) 病理切片發現多核巨大細胞，代表切片來自於被單純疱疹病毒 (herpes simplex virus) 感染的病患",
            "(D) 科霍氏原則 (Koch's postulate) 是判斷病原及疾病相關性的方法"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-30",
        relatedPathogen: "rna_retro",
        type: "vaccine",
        question: "愛滋病患者若需要進行疫苗接種，不適合接種下列哪一種疫苗?",
        options: [
            "(A) 沙克疫苗 (Salk vaccine)",
            "(B) 狂犬病疫苗 (Rabies vaccine)",
            "(C) 帶狀疱疹疫苗 (Zoster vaccine)",
            "(D) 腸病毒 71 型疫苗 (Enterovirus 71 vaccine)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-31",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "下列有關抗病毒藥、作用機轉與病毒的配對，何者正確? \n① Lamivudine: 核酸複製: HIV \n② Acyclovir: 核酸複製: CMV \n③ Amantadine: 去蛋白衣: Influenza A \n④ Ribavirin: 核酸複製: HCV \n⑤ Ritonavir: 核酸複製: HIV",
        options: [
            "(A) 1, 3, 4",
            "(B) 1, 2, 3",
            "(C) 1, 3, 5",
            "(D) 2, 4, 5"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-32",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "有關抗病毒藥物 acyclovir 的敘述，下列何者錯誤?",
        options: [
            "(A) 此藥物為核苷類似物 (nucleoside analogue)",
            "(B) 此藥物須先經由病毒蛋白質作用後才能發揮作用",
            "(C) 病毒的 thymidine kinase 基因突變可能會導致病毒對 acyclovir 產生抗藥性",
            "(D) 此藥物可以避免病毒的潛伏感染"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-33",
        relatedPathogen: "dna_herpes",
        type: "clinical",
        question: "關於疱疹病毒 (herpesvirus) 所引起的疾病或現象，下列敘述何者正確?",
        options: [
            "(A) 急性疱疹性口齦炎 (Acute herpetic gingivostomatitis) 是 HHV-8 所引起",
            "(B) Burkitt's lymphoma 的發生與人類巨細胞病毒的感染有關",
            "(C) 單純疱疹病毒第二型的感染都在腰部以下，不會有口腔內的感染",
            "(D) 疱疹性唇炎 (herpes labialis) 為單純疱疹病毒第一型潛伏再復發後所造成的疾病"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-34",
        relatedPathogen: "rna_reo",
        type: "virology",
        question: "下列有關輪狀病毒 (rotavirus) 的敘述，何者錯誤?",
        options: [
            "(A) 可用抗病毒藥物治療",
            "(B) 已有疫苗可供接種",
            "(C) 為一個主要造成嬰幼兒嚴重腹瀉的病毒",
            "(D) 如果同時感染兩個不同血清型的病毒，基因體重組 (reassortment) 可能發生"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-35",
        relatedPathogen: "rna_picorna",
        type: "virology",
        question: "下列何者為鼻病毒 (rhinovirus) 之特性?",
        options: [
            "(A) 細胞病變呈葡萄球狀聚集",
            "(B) 造成下呼吸道感染比上呼吸道感染常見",
            "(C) 對酸敏感",
            "(D) 具有套膜之病毒"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-36",
        relatedPathogen: "rabies",
        type: "clinical",
        question: "下列有關狂犬病毒 (rabies virus) 的敘述，何者最不適當?",
        options: [
            "(A) 此病毒可以侵犯中樞神經系統",
            "(B) 有部分受感染的人會產生恐水症 (hydrophobia)",
            "(C) 疫苗對已經受感染病人並無任何治療效果",
            "(D) 此病毒可能存在被感染動物的唾液中"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-37",
        relatedPathogen: "prion",
        type: "clinical",
        question: "下列關於庫賈氏病 (Creutzfeldt-Jakob disease) 之敘述，何者錯誤?",
        options: [
            "(A) 是由一種具感染性的普利昂蛋白 (prion) 造成的疾病",
            "(B) 因為星狀細胞吞噬受傷的神經細胞，而使腦組織變成海綿樣",
            "(C) 若是因吃入遭受污染的牛肉或相關內臟、骨粉，則潛伏期通常較短",
            "(D) 可藉由侵入性醫療裝置傳染"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-38",
        relatedPathogen: "general_virology",
        type: "diagnosis",
        question: "下列何種病毒無法利用抗原特異性來區分型別?",
        options: [
            "(A) 小兒麻痺病毒 (Poliovirus)",
            "(B) 人類乳突狀瘤病毒 (Human papillomavirus)",
            "(C) 單純疱疹病毒 (Herpes simplex virus)",
            "(D) 腺病毒 (Adenovirus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-39",
        relatedPathogen: "vzv",
        type: "clinical",
        question: "下列何者較不可能發生於初次感染水痘帶狀疱疹病毒 (VZV) 的成年人?",
        options: [
            "(A) 病毒血症 (Viremia)",
            "(B) 發燒 (Fever)",
            "(C) 帶狀疱疹 (Herpes zoster)",
            "(D) 肺炎 (Pneumonia)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-40",
        relatedPathogen: "ebv",
        type: "mechanism",
        question: "Epstein-Barr virus 感染可導致下列何種細胞的不死化 (immortalization)?",
        options: [
            "(A) T 淋巴球",
            "(B) 上皮細胞",
            "(C) B 淋巴球",
            "(D) 紅血球"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-41",
        relatedPathogen: "dna_herpes",
        type: "virology",
        question: "下列何種病毒的潛伏感染部位 (latency site) 最常在單核球 (monocyte)?",
        options: [
            "(A) 單純疱疹病毒 (HSV)",
            "(B) 水痘帶狀疱疹病毒 (VZV)",
            "(C) 腺病毒 (Adenovirus)",
            "(D) 人類巨細胞病毒 (CMV)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-42",
        relatedPathogen: "rna_picorna",
        type: "clinical",
        question: "下列何者與引起疱疹性咽喉炎 (herpangina) 及手足口病 (hand-foot-and-mouth disease) 的致病原最相關?",
        options: [
            "(A) 水痘帶狀疱疹病毒 (VZV)",
            "(B) 腺病毒 (Adenovirus)",
            "(C) 小病毒 B19 (Parvovirus B19)",
            "(D) 克沙奇病毒 (Coxsackievirus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-43",
        relatedPathogen: "dna_parvo",
        type: "clinical",
        question: "孕婦感染下列何種病毒較易造成胎兒水腫 (hydrops fetalis)?",
        options: [
            "(A) BK virus",
            "(B) 水痘帶狀疱疹病毒 (VZV)",
            "(C) 小病毒 B19 (Parvovirus B19)",
            "(D) 克沙奇病毒 (Coxsackievirus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-44",
        relatedPathogen: "hpv",
        type: "clinical",
        question: "下列何種疾病與人類乳突狀瘤病毒 (HPV) 最無關?",
        options: [
            "(A) 膀胱炎 (Cystitis)",
            "(B) 子宮頸癌 (Cervical cancer)",
            "(C) 頭頸部良性腫瘤",
            "(D) 尖型濕疣 (Genital warts)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-45",
        relatedPathogen: "dna_pap_poly",
        type: "clinical",
        question: "下列何種病毒的感染與常見於腎臟移植病患的輸尿管狹窄 (ureteral stenosis) 最相關?",
        options: [
            "(A) B19 病毒",
            "(B) JC 病毒",
            "(C) BK 病毒",
            "(D) HPV"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-46",
        relatedPathogen: "dna_adeno",
        type: "clinical",
        question: "下列何者為腺病毒 (adenovirus) 第 41 型所引發的主要臨床症狀?",
        options: [
            "(A) 結膜角膜炎",
            "(B) 上呼吸道感染",
            "(C) 紅疹",
            "(D) 腸胃道感染"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-47",
        relatedPathogen: "rna_picorna",
        type: "clinical",
        question: "一位小朋友發高燒 5 天，持續出現食慾不佳、意識模糊和四肢無力的情形。家長自述一星期前幼稚園的同學也出現同樣的情形。最需要考慮下列何種病毒感染?",
        options: [
            "(A) 鼻病毒 (Rhinovirus)",
            "(B) 腸病毒 71 型 (Enterovirus 71)",
            "(C) 腺病毒 (Adenovirus)",
            "(D) 狂犬病毒 (Rabies virus)"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-48",
        relatedPathogen: "ebv",
        type: "clinical",
        question: "一位大學新生持續 2 週有頭痛、發燒、疲倦的狀況。這兩天又有喉嚨痛及淋巴腫大、實驗室診斷發現其為嗜異性抗體 (heterophile antibody) 陽性。下列有關該病毒及疾病的描述何者正確?",
        options: [
            "(A) 會藉由糞口或呼吸道飛沫傳播",
            "(B) 感染到小孩子可能造成無症狀性感染",
            "(C) 與人類疱疹病毒第六型同屬同一個病毒亞科",
            "(D) 有疫苗可以加以預防"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-49",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何者病毒引起的主要臨床表徵是因其會造成潛伏感染 (latent infection)，感染並潛藏在感覺神經元細胞內所致? \n① HSV-1 \n② Poliovirus \n③ VZV (HHV-3) \n④ JC virus \n⑤ Rabies virus",
        options: [
            "(A) 1, 2, 5",
            "(B) 2, 4, 5",
            "(C) 2, 3, 5",
            "(D) 1, 3"
        ],
        correctAnswer: "",
        userNote: ""
    },
    {
        id: "112-final-50",
        relatedPathogen: "general_virology",
        type: "epidemiology",
        question: "到開發中國家旅遊可能會因為吃到不乾淨的食物而被感染，請問下列哪些病毒可以藉由糞口傳播? \n① Poliovirus \n② VZV \n③ Adenovirus \n④ Parvovirus B19 \n⑤ Norovirus",
        options: [
            "(A) 1, 3, 5",
            "(B) 1, 3, 4, 5",
            "(C) 2, 3, 4",
            "(D) 1, 4, 5"
        ],
        correctAnswer: "",
        userNote: ""
    },

    // === 111 學年度 ===
    {
        id: "111-final-01",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "有關病毒的敘述，下列何者錯誤？",
        options: [
            "(A) 外套膜 (envelope) 可以取材自細胞膜、胞器膜或核膜",
            "(B) 病毒必須在活細胞中繁殖",
            "(C) 病毒表面突出的蛋白質可能會負責吸附",
            "(D) RNA(+)病毒必須攜帶 RdRp (RNA-dependent RNA polymerase)"
        ],
        correctAnswer: "D",
        userNote: "RNA(+) 病毒基因體本身可作為 mRNA，故不需攜帶 RdRp。"
    },
    {
        id: "111-final-02",
        relatedPathogen: "general_virology",
        type: "mechanism",
        question: "下列為病毒生活史的基本步驟，請依照感染步驟依序加以排列：(1)釋放 (release) (2)穿透 (penetration) (3)基因體的複製及蛋白質的產生 (4)組裝 (assembly) (5)吸附 (attachment) (6)去蛋白衣 (uncoating)。",
        options: [
            "(A) 5,6,2,4,1,3",
            "(B) 6,2,3,4,1,5",
            "(C) 2,6,5,3,4,1",
            "(D) 5,2,6,3,4,1"
        ],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "111-final-03",
        relatedPathogen: "immunology",
        type: "clinical",
        question: "下列數據是某患者相隔兩星期分別測得之某一致病原的抗體效價，請問那一組的結果 (急性期/恢復期) 可以判斷該病人為近期感染？",
        options: [
            "(A) 20倍/20倍",
            "(B) 40倍/80倍",
            "(C) 80倍/640倍",
            "(D) 80倍/20倍"
        ],
        correctAnswer: "C",
        userNote: "抗體效價上升 4 倍 (4-fold rise) 以上視為近期感染。"
    },
    {
        id: "111-final-04",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "下列有關各種抗病毒藥物與其作用機制的配對，何者錯誤？",
        options: [
            "(A) Amantadine / 脫殼",
            "(B) Interferon / DNA複製",
            "(C) Oseltamivir / 釋放",
            "(D) neutralizing / 附著"
        ],
        correctAnswer: "B",
        userNote: "Interferon (干擾素) 主要抑制病毒蛋白合成 (Translation) 或降解 mRNA。"
    },
    {
        id: "111-final-05",
        relatedPathogen: "prion",
        type: "clinical",
        question: "關於 Prion 敘述何者正確？",
        options: [
            "(A) 會造成患者腦部出現海綿狀空泡化",
            "(B) 患者會有強烈的免疫反應且有發燒現象",
            "(C) 可用一般之滅菌方式消滅",
            "(D) Prion 是一種有套膜的 dsRNA 病毒"
        ],
        correctAnswer: "A",
        userNote: "Prion 不誘發發炎反應 (No inflammation)，也不含核酸。"
    },
    {
        id: "111-final-06",
        relatedPathogen: "prion",
        type: "epidemiology",
        question: "根據食品衛生管理法規定，雖非疫區但近十年內有發生牛海綿狀腦病之國家，其牛隻何種部位不屬於台灣明訂禁止進口的特定風險物質？",
        options: [
            "(A) 牛舌",
            "(B) 絞肉",
            "(C) 脊髓",
            "(D) 眼睛"
        ],
        correctAnswer: "A",
        userNote: "特定風險物質 (SRM) 包括腦、眼、脊髓、扁桃腺、迴腸末端。"
    },
    {
        id: "111-final-07",
        relatedPathogen: "hpv",
        type: "clinical",
        question: "下列有關人類乳突病毒 (HPV) 的敘述何者錯誤？",
        options: [
            "(A) 具有高致癌力的是第 16 及 18 型",
            "(B) 菜花是由第 6 及 11 型所引起的",
            "(C) 雞眼與此病毒無關",
            "(D) 臨床上是利用抗原性不同進行分型"
        ],
        correctAnswer: "D",
        userNote: "HPV 分型是依據 DNA 序列差異。"
    },
    {
        id: "111-final-08",
        relatedPathogen: "rna_rhabdo",
        type: "clinical",
        question: "下列有關狂犬病毒 (Rabies) 何者最不適當？",
        options: [
            "(A) 此病毒可以侵犯中樞神經系統",
            "(B) 有部分受感染的人會產生恐水症",
            "(C) 疫苗對已經受感染病人並無任何治療效果",
            "(D) 此病毒可能存在被感染動物的唾液中"
        ],
        correctAnswer: "C",
        userNote: "狂犬病暴露後預防 (PEP) 包含疫苗與免疫球蛋白，及時施打有效。"
    },
    {
        id: "111-final-09",
        relatedPathogen: "rna_picorna",
        type: "virology",
        question: "下列有關鼻病毒 (Rhinovirus) 的敘述何者錯誤？",
        options: [
            "(A) 感染上呼吸道，可造成普通感冒",
            "(B) 病毒可在 33°C 的細胞培養中複製",
            "(C) 耐酸性環境，可在腸胃道複製",
            "(D) 感染不限於嬰幼兒，也可以感染成人"
        ],
        correctAnswer: "C",
        userNote: "Rhinovirus 不耐酸 (Acid labile)。"
    },
    {
        id: "111-final-10",
        relatedPathogen: "rna_picorna",
        type: "clinical",
        question: "關於腸病毒的敘述下列何者正確？",
        options: [
            "(A) 傳染性紅斑是因為腸病毒感染所引起",
            "(B) 手足口症有可能因為腸病毒 71 型感染所產生",
            "(C) 大部分的疱疹性咽峡炎症狀都很輕微，且潰瘍常出現在前硬顎",
            "(D) 所有腸病毒的感染都需要積極治療，包括使用抗病毒藥物"
        ],
        correctAnswer: "B",
        userNote: "A: B19病毒。 C: 軟顎。 D: 無特效藥，採支持療法。"
    },
    {
        id: "111-final-11",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列病毒之敘述何者錯誤？",
        options: [
            "(A) 腺病毒感染後可能造成結膜炎、咽炎等症狀",
            "(B) JC 病毒透過呼吸道傳染，會造成進行性多灶性白質腦病 (PML)",
            "(C) 人類乳突病毒透過接觸傳染，可能會造成疣或癌",
            "(D) B19 病毒會感染紅血球造成貧血"
        ],
        correctAnswer: "D",
        userNote: "B19 感染「紅血球前驅細胞」，而非成熟紅血球。"
    },
    {
        id: "111-final-12",
        relatedPathogen: "dna_herpes",
        type: "clinical",
        question: "口唇疱疹 (Cold sore) 與下列何種病毒有關？",
        options: [
            "(A) 克沙其病毒",
            "(B) 人類乳突病毒",
            "(C) 水痘-帶狀疱疹病毒",
            "(D) 單純疱疹病毒第一型 (HSV-1)"
        ],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "111-final-13",
        relatedPathogen: "dna_adeno",
        type: "clinical",
        question: "下列何者為腺病毒第 41 型所引發的主要臨床症狀？",
        options: [
            "(A) 角膜結膜炎",
            "(B) 上呼吸道感染",
            "(C) 紅疹",
            "(D) 腸胃道感染"
        ],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "111-final-14",
        relatedPathogen: "vzv",
        type: "clinical",
        question: "有關帶狀疱疹 (Zoster) 何者錯誤？",
        options: [
            "(A) 人類疱疹病毒第三型初次感染所引起",
            "(B) 出疹處常劇烈疼痛",
            "(C) 病灶常侷限於胸或腹部的一側",
            "(D) 可能出現帶狀疱疹後神經痛"
        ],
        correctAnswer: "A",
        userNote: "初次感染是水痘，帶狀疱疹是復發。"
    },
    {
        id: "111-final-15",
        relatedPathogen: "rna_reo",
        type: "virology",
        question: "下列何種病毒具有雙層蛋白衣，經胰蛋白酶 (Trypsin) 消化後形成中間型次病毒顆粒，其感染能力會增強？",
        options: [
            "(A) 諾羅病毒",
            "(B) 輪狀病毒 (Rotavirus)",
            "(C) 腸病毒",
            "(D) 腺病毒"
        ],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "111-final-16",
        relatedPathogen: "ebv",
        type: "clinical",
        question: "下列何種症狀最不可能發生於 EBV 感染？",
        options: [
            "(A) 白血球數目增多",
            "(B) 發燒",
            "(C) 血紅素下降",
            "(D) 肝脾腫大"
        ],
        correctAnswer: "C",
        userNote: "除非併發溶血性貧血，否則 EBV 通常不造成血紅素下降。"
    },
    {
        id: "111-final-17",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列何種病毒最不可能有潛伏性感染 (latent infection)？",
        options: [
            "(A) 單純疱疹病毒",
            "(B) 水痘帶狀疱疹病毒",
            "(C) BK 病毒",
            "(D) 小病毒 B19"
        ],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "111-final-18",
        relatedPathogen: "dna_herpes",
        type: "clinical",
        question: "下列何種病毒可引發單核球增多症，也是輸血後症候群的常見致病原？",
        options: [
            "(A) 小病毒 B19",
            "(B) EBV",
            "(C) 水痘帶狀疱疹病毒",
            "(D) 巨細胞病毒 (CMV)"
        ],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "111-final-19",
        relatedPathogen: "hpv",
        type: "vaccine",
        question: "目前臨床上使用的子宮頸癌疫苗可以預防下列哪一種疾病？",
        options: [
            "(A) 尖銳濕疣 (Genital warts)",
            "(B) 單純疣",
            "(C) 卡波西肉瘤",
            "(D) 生殖道疱疹"
        ],
        correctAnswer: "A",
        userNote: "針對 HPV 6, 11 型可預防菜花。"
    },
    {
        id: "111-final-20",
        relatedPathogen: "vaccine",
        type: "vaccine",
        question: "目前人類疱疹病毒中，何者具有疫苗可預防感染？",
        options: [
            "(A) 水痘帶狀疱疹病毒 (VZV)",
            "(B) EBV",
            "(C) 單純疱疹病毒",
            "(D) 巨細胞病毒"
        ],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "111-final-21",
        relatedPathogen: "rna_picorna",
        type: "vaccine",
        question: "下列何者是口服小兒麻痺疫苗 (OPV) 的特性？",
        options: [
            "(A) 可引發 IgA 反應",
            "(B) 口服一次終生免疫",
            "(C) 不會突變為野生型病毒",
            "(D) 為台灣現在主要的小兒麻痺疫苗"
        ],
        correctAnswer: "A",
        userNote: "台灣目前主要使用 IPV (注射型)。"
    },
    {
        id: "111-final-22",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "下列哪些病毒對乾洗手 (酒精) 的處理有抗性？ (1)克沙其病毒 (2)輪狀病毒 (3)水痘-帶狀疱疹病毒 (4)腺病毒",
        options: [
            "(A) 123",
            "(B) 234",
            "(C) 124",
            "(D) 1234"
        ],
        correctAnswer: "C",
        userNote: "無套膜病毒 (1, 2, 4) 對酒精有抗性；VZV (3) 有套膜。"
    },
    {
        id: "111-final-23",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "Acyclovir 是臨床上治療何種病毒之藥物？",
        options: [
            "(A) 單純疱疹病毒 (HSV)",
            "(B) EBV",
            "(C) 人體免疫缺乏病毒",
            "(D) 巨細胞病毒"
        ],
        correctAnswer: "A",
        userNote: ""
    },
    {
        id: "111-final-24",
        relatedPathogen: "antiviral",
        type: "clinical",
        question: "小孩因病毒感染而使用某種藥物作為退燒時，易伴隨有雷氏症候群 (Reye syndrome)。下列何種藥物產生此副作用的可能性最高？",
        options: [
            "(A) Acyclovir",
            "(B) Aspirin",
            "(C) Penicillin",
            "(D) Rifampin"
        ],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "111-final-25",
        relatedPathogen: "rna_retro",
        type: "clinical",
        question: "下列有關 HIV 的敘述，何者是正確的？",
        options: [
            "(A) 為 ssRNA(+) 病毒，對酒精不敏感",
            "(B) 病毒的 gp41 負責吸附，gp120 負責穿透",
            "(C) HIV DNA 會插到宿主染色體中，進而導致腫瘤的發生",
            "(D) 目前利用 HAART 的療法 (雞尾酒療法) 可以延緩抗藥性病毒株的出現"
        ],
        correctAnswer: "D",
        userNote: "HIV 有套膜，對酒精敏感。gp120 吸附，gp41 穿透。"
    },
    {
        id: "111-final-26",
        relatedPathogen: "rna_retro",
        type: "virology",
        question: "下列何種細胞不是 HIV 主要感染的細胞種類？",
        options: [
            "(A) CD4 T 細胞",
            "(B) 嗜中性白血球 (Neutrophil)",
            "(C) 巨噬細胞 (Macrophage)",
            "(D) 樹突細胞 (Dendritic cells)"
        ],
        correctAnswer: "B",
        userNote: "HIV 感染帶有 CD4 的細胞。"
    },
    {
        id: "111-final-27",
        relatedPathogen: "rna_retro",
        type: "diagnosis",
        question: "下列有關 HIV-1 診斷的敘述，何者是錯誤的？",
        options: [
            "(A) HIV 的核酸或 p24 抗原檢測是感染初期診斷的重要檢驗",
            "(B) HIV 的 RNA 病毒量可以用來判斷治療成果",
            "(C) CD4+ T 細胞數目小於 500 個/µl，比較容易有伺機性感染",
            "(D) HIV 的 RT-PCR 檢驗可以用來確診新生兒 HIV 感染"
        ],
        correctAnswer: "C",
        userNote: "AIDS 定義通常為 CD4 < 200/µl。"
    },
    {
        id: "111-final-28",
        relatedPathogen: "rna_retro",
        type: "pharmacology",
        question: "在 HIV-1 中，下列那個基因的點突變會對治療藥物 lamivudine 產生抗藥性？",
        options: [
            "(A) gag",
            "(B) env",
            "(C) pol",
            "(D) vif"
        ],
        correctAnswer: "C",
        userNote: "Pol 基因編碼反轉錄酶 (RT)。"
    },
    {
        id: "111-final-29",
        relatedPathogen: "rna_retro",
        type: "diagnosis",
        question: "利用現行 HIV-1 檢驗試劑，可測得特異性標記在血液中出現的時間順序依次為何？(1)HIV-1 IgG (2)HIV-1 IgM (3)HIV-1 RNA (4)p24 Ag",
        options: [
            "(A) 4,3,1,2",
            "(B) 3,4,2,1",
            "(C) 3,2,4,1",
            "(D) 4,1,2,3"
        ],
        correctAnswer: "B",
        userNote: "病毒核酸(RNA) -> 抗原(p24) -> IgM -> IgG。"
    },
    {
        id: "111-final-30",
        relatedPathogen: "dna_pox",
        type: "clinical",
        question: "下列何種人類疾病不是由痘病毒 (Poxvirus) 引起？",
        options: [
            "(A) 天花 (Smallpox)",
            "(B) 傳染性軟疣 (Molluscum contagiosum)",
            "(C) 手指頭上的 Orf 病灶",
            "(D) 疱疹性膿性指頭 (Herpetic Whitlow)"
        ],
        correctAnswer: "D",
        userNote: "Herpetic Whitlow 由 HSV 引起。"
    },
    {
        id: "111-final-31",
        relatedPathogen: "antiviral",
        type: "pharmacology",
        question: "有關抗流感藥物 zanamivir (Relenza) 及 oseltamivir (Tamiflu) 的敘述，下列何者錯誤？",
        options: [
            "(A) 二者都是針對 neuraminidase 的酵素抑制物",
            "(B) 作用在流感病毒的 release 階段",
            "(C) 只對 influenza A 有效",
            "(D) 感染後 48 小時內服用可以預防或縮短症狀時間"
        ],
        correctAnswer: "C",
        userNote: "對 A 型與 B 型流感皆有效。"
    },
    {
        id: "111-final-32",
        relatedPathogen: "rna_ortho",
        type: "virology",
        question: "下列有關流感病毒 (influenza virus) 的敘述，何者錯誤？",
        options: [
            "(A) 利用 NP 與 M1 蛋白的差異，來區別流感病毒 A、B、C 三型",
            "(B) 利用 HA 與 NA 蛋白的差異，來區別 A 型流感病毒的亞型",
            "(C) A、B、C 三型中，抗原變異最大的是 A 型",
            "(D) C 型曾造成大流行"
        ],
        correctAnswer: "D",
        userNote: "C 型流感較穩定，極少造成大流行。"
    },
    {
        id: "111-final-33",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "某醫院工作人員被驗出有 HBsAg，繼而又被驗出 HBeAg。此醫院工作人員最可能是下列何種情況？",
        options: [
            "(A) 有肝炎且有傳染力",
            "(B) 有肝炎但不具傳染力",
            "(C) 感染了 B 型及 C 型肝炎病毒",
            "(D) 此檢驗結果顯然是偽陽性"
        ],
        correctAnswer: "A",
        userNote: "HBeAg 陽性代表高傳染力。"
    },
    {
        id: "111-final-34",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "下列有關日本腦炎病毒與登革熱病毒特性之敘述，何者正確？",
        options: [
            "(A) 均可注射疫苗，預防感染",
            "(B) 被感染之宿主可再直接散播病毒",
            "(C) 均由埃及斑蚊傳播",
            "(D) 感染後均產生感冒般症狀"
        ],
        correctAnswer: "D",
        userNote: ""
    },
    {
        id: "111-final-35",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "B 型肝炎病毒中何種蛋白可自行聚集形成大小形狀不一的顆粒 (Decoy particles)？",
        options: [
            "(A) HBcAg",
            "(B) HBeAg",
            "(C) HBsAg",
            "(D) X protein"
        ],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "111-final-36",
        relatedPathogen: "rna_paramyxo",
        type: "virology",
        question: "下列何者是流行性感冒病毒 (Influenza) 和副流行性感冒病毒 (Parainfluenza) 的不同點？",
        options: [
            "(A) 前者為正股 RNA 病毒，後者為負股 RNA 病毒",
            "(B) 前者為負股 RNA 病毒，後者為正股 RNA 病毒",
            "(C) 前者在細胞核複製，後者是在細胞質複製",
            "(D) 前者的基因體是不分段型，後者是分段型"
        ],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "111-final-37",
        relatedPathogen: "general_virology",
        type: "safety",
        question: "有關生物安全等級-3 (BSL-3) 實驗室設計上的防護，下列敘述何者錯誤？",
        options: [
            "(A) 實驗室與走廊通道有物理性分隔",
            "(B) 具備可自動關的雙門，且雙門不會同時打開",
            "(C) 排放的廢氣不再循環",
            "(D) 正壓氣流進入實驗室"
        ],
        correctAnswer: "D",
        userNote: "BSL-3 需維持負壓。"
    },
    {
        id: "111-final-38",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "構成真菌細胞壁之主要成分為何？",
        options: [
            "(A) 幾丁質以及 α-1-4-葡萄聚醣",
            "(B) 幾丁質以及 β-1-3-葡萄聚醣",
            "(C) 肽醣以及 β-1-4-葡萄聚醣",
            "(D) 幾丁質以及 α-1-6-葡萄聚醣"
        ],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "111-final-39",
        relatedPathogen: "myco_opportunistic",
        type: "clinical",
        question: "常見於嬰孩口腔之鵝口瘡，是何種微生物感染？",
        options: [
            "(A) 新型隱球菌",
            "(B) 白色念珠菌 (C. albicans)",
            "(C) 金黃色葡萄球菌",
            "(D) 淋病雙球菌"
        ],
        correctAnswer: "B",
        userNote: ""
    },
    {
        id: "111-final-40",
        relatedPathogen: "general_virology",
        type: "virology",
        question: "血球附著現象 (Hemadsorption) 不可用來初步認定下列那一種病毒培養？",
        options: [
            "(A) 呼吸道融合病毒 (RSV)",
            "(B) 腮腺炎病毒",
            "(C) 副流行性感冒病毒",
            "(D) 麻疹病毒"
        ],
        correctAnswer: "A",
        userNote: "RSV 不具 HA 蛋白。"
    },
    {
        id: "111-final-41",
        relatedPathogen: "immunology",
        type: "vaccine",
        question: "感染下列那些病毒後，病人可獲得終身免疫力？(1)麻疹病毒 (2)單純疱疹病毒 (3)腺病毒 (4)腮腺炎病毒",
        options: [
            "(A) 12",
            "(B) 34",
            "(C) 13",
            "(D) 14"
        ],
        correctAnswer: "D",
        userNote: "Measles (1) 和 Mumps (4) 感染後通常終身免疫。"
    },
    {
        id: "111-final-42",
        relatedPathogen: "rna_paramyxo",
        type: "clinical",
        question: "下列何種病毒，會引起睪丸、卵巢、胰臟等腺體發炎之病症？",
        options: [
            "(A) 麻疹病毒",
            "(B) 呼吸道融合病毒",
            "(C) 腮腺炎病毒 (Mumps)",
            "(D) 副流行性感冒病毒"
        ],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "111-final-43",
        relatedPathogen: "hepatitis",
        type: "clinical",
        question: "病患若先感染 B 型肝炎病毒後，再感染下列何種肝炎病毒，極易引發猛爆性肝炎 (Fulminant hepatitis)？",
        options: [
            "(A) A 型",
            "(B) C 型",
            "(C) D 型 (HDV)",
            "(D) E 型"
        ],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "111-final-44",
        relatedPathogen: "hepatitis",
        type: "virology",
        question: "下列那一種肝炎病毒與腸病毒 (Enterovirus) 在分類上最接近？",
        options: [
            "(A) HAV",
            "(B) HDV",
            "(C) HCV",
            "(D) HEV"
        ],
        correctAnswer: "A",
        userNote: "HAV 屬於 Picornaviridae (微小 RNA 病毒科)。"
    },
    {
        id: "111-final-45",
        relatedPathogen: "myco_superficial",
        type: "clinical",
        question: "有關花斑癣 (pityriasis versicolor) 之敘述，下列何者錯誤？",
        options: [
            "(A) 最常見於年輕人",
            "(B) 致病原為馬拉色菌綜合菌 (Malassezia furfur)",
            "(C) 致病原未歸類為自然界腐生菌",
            "(D) 無法由檢體直接做鏡檢診斷"
        ],
        correctAnswer: "D",
        userNote: "鏡檢可見 Spaghetti and Meatballs 特徵。"
    },
    {
        id: "111-final-46",
        relatedPathogen: "rna_filo",
        type: "virology",
        question: "下列關於馬堡病毒 (Marburg) 和伊波拉病毒 (Ebola) 之敘述，何者正確？",
        options: [
            "(A) 伊波拉病毒為飲食傳播",
            "(B) 馬堡病毒有 2 種亞型",
            "(C) 兩者皆屬於絲狀病毒科 (Filoviridae)",
            "(D) 兩者皆為生物安全等級第三級"
        ],
        correctAnswer: "C",
        userNote: "兩者皆屬 Filoviridae，且為 BSL-4 病原。"
    },
    {
        id: "111-final-47",
        relatedPathogen: "rna_ortho",
        type: "clinical",
        question: "感染下列何種病毒，若自行服用阿司匹靈 (Aspirin) 等水楊酸類退燒藥物後，最易增加兒童罹患雷氏症候群 (Reye syndrome) 的風險？",
        options: [
            "(A) 德國麻疹病毒",
            "(B) 麻疹病毒",
            "(C) 流感病毒 (Influenza virus)",
            "(D) 狂犬病病毒"
        ],
        correctAnswer: "C",
        userNote: ""
    },
    {
        id: "111-final-48",
        relatedPathogen: "rna_arbo",
        type: "virology",
        question: "關於黃病毒屬 (Flavivirus) 之敘述，下列何者錯誤？",
        options: [
            "(A) 常見的病媒 (vector) 為蚊子或壁蝨",
            "(B) NS1 蛋白在病毒感染的後期才會表現",
            "(C) 茲卡病毒 (Zika virus) 屬於 flavivirus",
            "(D) 為具有套膜的 RNA 病毒"
        ],
        correctAnswer: "B",
        userNote: "NS1 為早期非結構蛋白。"
    },
    {
        id: "111-final-49",
        relatedPathogen: "myco_intro",
        type: "basic",
        question: "真菌之無性孢子 (asexual spores) 可分成那兩大類？",
        options: [
            "(A) 分生孢子 (conidia) 及囊孢子 (sporangiospores)",
            "(B) 瓶孢子 (phialides) 及分節孢子 (arthrospores)",
            "(C) 厚膜孢子 (chlamydospores) 及分節孢子 (arthrospores)",
            "(D) 分節孢子 (arthrospores) 及芽生孢子 (blastospores)"
        ],
        correctAnswer: "A",
        userNote: ""
    },
    
    //  110 考古試題  //
    
    {
        id: "110-final-01",
        relatedPathogen: "General Virology",
        type: "Structure",
        question: "完整具感染力的ssRNA(-)病毒顆粒必須是由以下哪些結構或元件組裝成的？ (A complete infectious ssRNA(-) virus particle must be composed of: (1)ssRNA(-) (2) capsid (3) envelope (4) RNA-dependent RNA polymerase (5) ribosome)",
        options: [
            "(A) 1, 2",
            "(B) 1, 2, 3",
            "(C) 1, 2, 4",
            "(D) 1, 2, 4, 5"
        ],
        correctAnswer: "C",
        userNote: "負股RNA病毒 ((-)ssRNA) 進入細胞後無法直接轉譯，必須自帶 RNA 依賴性 RNA 聚合酶 (RdRp) 才能轉錄出 mRNA [cite: 19, 31]。"
    },
    {
        id: "110-final-02",
        relatedPathogen: "General Virology",
        type: "Replication",
        question: "下列有關病毒複製生活史的描述，何者為誤？ (Which of the following statements about the viral replication steps is not correct?)",
        options: [
            "(A) 吸附 (Attachment) 通常可以決定病毒感染的細胞種類",
            "(B) 融合 (Fusion) 通常是有套膜的病毒穿透的機制",
            "(C) 在細胞內組裝完成的病毒通常已具有感染力",
            "(D) 沒有套膜的病毒釋放的過程通常會造成細胞的破裂"
        ],
        correctAnswer: "C",
        userNote: "許多病毒（如HIV）在組裝釋放後，需經由蛋白酶 (Protease) 進行切割修飾 (Maturation) 才具有感染力 [cite: 19, 31]。"
    },
    {
        id: "110-final-03",
        relatedPathogen: "Clinical Virology",
        type: "Diagnosis",
        question: "下列描述為病毒診斷方法的判讀，請選出所有正確的描述。(1)呼吸道飛沫分離到鼻病毒代表這個人具傳染力 (2)SARS-CoV2 PCR呈現陽性且Ct值越高代表這個人具傳染力 (3)血清中B型肝炎表面抗體呈現陽性代表這個人曾被病毒感染過 (4)腦部切片出現質內嗜酸性包涵體 Negri bodies 代表切片來自於狂犬病患者",
        options: [
            "(A) 1, 4",
            "(B) 1, 3, 4",
            "(C) 2, 3, 4",
            "(D) 1, 2, 4"
        ],
        correctAnswer: "A",
        userNote: "Ct 值越高代表病毒載量越低；HBsAb 陽性也可能源自疫苗接種，不一定是感染過 [cite: 19, 31]。"
    },
    {
        id: "110-final-04",
        relatedPathogen: "EBV",
        type: "Clinical Correlation",
        question: "下列何項病毒檢驗與鼻咽癌 (nasopharyngeal carcinoma) 的臨床疾病嚴重度相關性最佳？",
        options: [
            "(A) CMV DNA viral load in the blood",
            "(B) CMV IgG in the blood",
            "(C) EBV DNA viral load in the blood",
            "(D) EBV VCA IgG in the blood"
        ],
        correctAnswer: "D",
        userNote: "EBV (Epstein-Barr Virus) 與鼻咽癌高度相關。雖然臨床也常測 DNA viral load 或 IgA，但依據考卷標準答案為 D [cite: 19, 31]。"
    },
    {
        id: "110-final-05",
        relatedPathogen: "General Virology",
        type: "Pathogenesis",
        question: "代表潛伏期很長的感染形式 (represents a form of infection with a long incubation period)",
        options: [
            "(A) Chronic infection / productive persistent infection",
            "(B) Chronic infection / non-productive persistent infection",
            "(C) Slow infection / productive persistent infection",
            "(D) Slow infection / non-productive persistent infection"
        ],
        correctAnswer: "D",
        userNote: "慢病毒感染 (Slow infection)，如 Prion 疾病，特徵是極長的潛伏期且不產生具感染力的病毒顆粒 (non-productive) [cite: 19, 31]。"
    },
    {
        id: "110-final-06",
        relatedPathogen: "Epidemiology",
        type: "Surveillance",
        question: "以下選項皆為傳染病監測金字塔的名詞，請問哪一個選項的人數最少？",
        options: [
            "(A) 臨床醫師診療個案數",
            "(B) 醫檢結果確定為陽性之個案數",
            "(C) 症狀個案數",
            "(D) 感染個數"
        ],
        correctAnswer: "B",
        userNote: "在監測金字塔中，底層（感染人數）最多，頂層（確診並通報）最少 [cite: 22, 31]。"
    },
    {
        id: "110-final-07",
        relatedPathogen: "Vaccine",
        type: "Immunology",
        question: "疫苗的開發大幅度減少感染症對人類的威脅，下列有關疫苗的敘述，何者最不適當？",
        options: [
            "(A) 疫苗有減毒疫苗及非活性疫苗，雖然減毒疫苗的效果較好，它的風險也比較大",
            "(B) 不論任何途徑給與疫苗都不會影響免疫反應的效果，因此大多數的疫苗都是用肌肉注射的方式",
            "(C) 通常有效的疫苗都會引起抗體反應去阻止病原的入侵或是中和毒素的作用",
            "(D) 以蛋白或胜肽為主的疫苗通常需要佐劑 (adjuvant) 去加強免疫反應"
        ],
        correctAnswer: "B",
        userNote: "給予途徑會影響免疫類型，例如口服疫苗能誘導黏膜免疫 (IgA)，而注射主要誘導 IgG [cite: 22, 31]。"
    },
    {
        id: "110-final-08",
        relatedPathogen: "Prion",
        type: "Clinical",
        question: "有關庫賈氏病 (Creutzfeldt-Jakob disease, CJD) 的敘述，下列何者錯誤？",
        options: [
            "(A) 大部分患者曾暴露到牛海綿狀腦病致病原",
            "(B) 為prion蛋白所引起",
            "(C) 目前並無特殊療法可以延緩疾病的進程，以支持性治療為主",
            "(D) 無法利用血清學檢驗驗出"
        ],
        correctAnswer: "A",
        userNote: "大多數 CJD 病例為散發性 (Sporadic)，僅變異型 CJD (vCJD) 與狂牛症有關 [cite: 22, 31]。"
    },
    {
        id: "110-final-09",
        relatedPathogen: "HPV",
        type: "General",
        question: "下列有關人類乳突瘤病毒 (human papillomavirus, HPV) 的敘述，何者錯誤？",
        options: [
            "(A) 可以感染皮膚組織以及黏膜組織",
            "(B) 沒有外套膜",
            "(C) 可依照抗原性區分至少100種血清型",
            "(D) HPV-16和HPV-18常與癌症的形成有關"
        ],
        correctAnswer: "C",
        userNote: "HPV 是依據 DNA 序列差異分為不同基因型 (Genotype)，而非血清型 [cite: 22, 31]。"
    },
    {
        id: "110-final-10",
        relatedPathogen: "BK Virus",
        type: "Clinical",
        question: "下列有關BK病毒特性的敘述，何者錯誤？",
        options: [
            "(A) 沒有外套膜",
            "(B) 一般感染為無症狀",
            "(C) 病毒不會潛藏在腎臟",
            "(D) 復發後可能導致出血性膀胱炎"
        ],
        correctAnswer: "C",
        userNote: "BK 病毒會潛伏在腎臟，在免疫抑制狀態下活化可引起腎病變或出血性膀胱炎 [cite: 24, 31]。"
    },
    {
        id: "110-final-11",
        relatedPathogen: "Parvovirus B19",
        type: "General",
        question: "下列有關小病毒 parvovirus B19 的敘述，何者錯誤？",
        options: [
            "(A) 是單股 (single-stranded) DNA病毒",
            "(B) 在體內感染紅血球前驅細胞",
            "(C) 可在臨床病毒實驗室以紅血球細胞株培養",
            "(D) 可造成 fifth disease"
        ],
        correctAnswer: "C",
        userNote: "Parvovirus B19 難以在一般細胞株培養，通常需使用人類骨髓細胞或特定細胞株 [cite: 24, 31]。"
    },
    {
        id: "110-final-12",
        relatedPathogen: "Rotavirus",
        type: "Structure",
        question: "有關輪狀病毒 (rotavirus) 結構的敘述，下列何者錯誤？",
        options: [
            "(A) 病毒顆粒大小約70nm",
            "(B) 成熟病毒顆粒內含11個段雙股RNA基因組",
            "(C) 由VP2蛋白組成單層蛋白質外殼",
            "(D) 病毒顆粒中帶有VP3病毒蛋白質，此蛋白質具有methyltransferase 功能"
        ],
        correctAnswer: "C",
        userNote: "輪狀病毒具有特殊的三層蛋白質外殼 (Triple-layered capsid) [cite: 24, 31]。"
    },
    {
        id: "110-final-13",
        relatedPathogen: "VZV",
        type: "Clinical",
        question: "下列有關水痘帶狀泡疹病毒 (varicella-zoster virus) 感染的敘述，何者錯誤？",
        options: [
            "(A) 嬰幼兒感染會有發燒、頭痛與全身不舒服，然後全身多處皮膚出現水泡的情形",
            "(B) 須配戴口罩預防飛沫及空氣傳染",
            "(C) 懷孕的母親不須特別小心，因為不會對胎兒有影響",
            "(D) 水痘病毒感染後，病毒會潛伏並可能復發為帶狀疱疹"
        ],
        correctAnswer: "C",
        userNote: "孕婦感染水痘可能導致胎兒先天性水痘症候群，需特別小心 [cite: 24, 31]。"
    },
    {
        id: "110-final-14",
        relatedPathogen: "Enterovirus",
        type: "Clinical Case",
        question: "一位小朋友發高燒5天，持續出現食慾不佳、意識模糊和四肢無力的情形。家長自述一星期前幼稚園的同學也出現同樣的情形。最需要考慮下列何種病毒感染？",
        options: [
            "(A) 鼻病毒 (Rhinovirus)",
            "(B) 腸病毒71型 (Enterovirus 71)",
            "(C) 腺病毒 (Adenovirus)",
            "(D) 水痘帶狀皰疹病毒 (Varicella-zoster virus)"
        ],
        correctAnswer: "B",
        userNote: "腸病毒 71 型易侵犯中樞神經系統，引起腦炎與肢體麻痺（類似小兒麻痺症狀） [cite: 24, 31]。"
    },
    {
        id: "110-final-15",
        relatedPathogen: "EBV",
        type: "Clinical Case",
        question: "有一位青少年發現自己淋巴結腫脹，至醫院檢測... 發現淋巴球數目比例增加，接續檢測異染性抗體 IgM (heterophile antibody IgM) 為陽性。有關該病原的描述，何者正確？",
        options: [
            "(A) 可以藉由不安全性行為傳播",
            "(B) 藉由口水傳播，造成俗稱接吻病的疾病",
            "(C) 可能會造成胎兒畸形",
            "(D) 感染免疫力強的人，可能會造成鼻咽癌"
        ],
        correctAnswer: "B",
        userNote: "EBV 引起的傳染性單核球增多症 (Infectious Mononucleosis) 俗稱接吻病，經唾液傳播 [cite: 26, 31]。"
    },
    {
        id: "110-final-16",
        relatedPathogen: "Norovirus",
        type: "Epidemiology",
        question: "農曆春節前，某老人長期照護中心發生上吐下瀉的急性腸胃炎群聚感染，應該最優先考慮下列哪一種病毒感染？",
        options: [
            "(A) 輪狀病毒 (Rotavirus)",
            "(B) 腸病毒 (Enterovirus)",
            "(C) 諾羅病毒 (Norovirus)",
            "(D) 腸道型腺病毒 (Enteric adenovirus)"
        ],
        correctAnswer: "C",
        userNote: "諾羅病毒是人口密集機構（如長照中心、郵輪）爆發群聚性腸胃炎最常見的病原 [cite: 26, 31]。"
    },
    {
        id: "110-final-17",
        relatedPathogen: "HSV/VZV",
        type: "Treatment",
        question: "關於 acyclovir 之敘述，下列何者正確？",
        options: [
            "(A) 可有效作用在潛伏期病毒",
            "(B) 此藥物須經由病毒特定胸苷激酶 (virus-specified thymidine kinase) 將其磷酸化才具活性",
            "(C) 抗藥性的發生可因為病毒中的 DNA 聚合酶產生變異，與病人免疫功能低下無關",
            "(D) 對 acyclovir 產生抗藥性時，替代藥物 valacyclovir 會比 trifluridine 適合"
        ],
        correctAnswer: "B",
        userNote: "Acyclovir 是前驅藥物，需先被病毒的 TK 酵素磷酸化才能抑制病毒 DNA 複製 [cite: 26, 31]。"
    },
    {
        id: "110-final-18",
        relatedPathogen: "HPV",
        type: "Mechanism",
        question: "下列有關人類乳突瘤病毒 (human papillomavirus, HPV) 導致子宮頸癌 (cervical cancer) 的機制，何者最不相關？",
        options: [
            "(A) HPV DNA 以 episomal form 存在",
            "(B) E2 deletion",
            "(C) E6 與 p53 結合",
            "(D) E7 與 p105Rb 結合"
        ],
        correctAnswer: "A",
       userNote: " HPV DNA 維持 episomal form (A) 通常見於良性病灶 [cite: 26]。"
    },
    {
        id: "110-final-19",
        relatedPathogen: "CMV",
        type: "Diagnosis",
        question: "下列何種病毒感染宿主後，會在胞核內產生“owl's eye”包涵體？",
        options: [
            "(A) 人類巨細胞病毒 (Human cytomegalovirus)",
            "(B) 狂犬病毒 (Rabies virus)",
            "(C) 水痘帶狀疱疹病毒 (Varicella-zoster virus)",
            "(D) Epstein-Barr virus"
        ],
        correctAnswer: "A",
        userNote: "貓頭鷹眼 (Owl's eye) 包涵體是 CMV 感染的典型病理特徵 [cite: 28, 31]。"
    },
    {
        id: "110-final-20",
        relatedPathogen: "General Virology",
        type: "Clinical",
        question: "下列哪些病毒一般不會造成中樞神經性的感染？ (1)人類乳突狀瘤病毒 (HPV) (2)腺病毒 (adenovirus) (3)鼻病毒 (rhinovirus) (4)腸病毒71型 (enterovirus 71)",
        options: [
            "(A) 只有 1、3",
            "(B) 只有 1、2、3",
            "(C) 只有 1、4",
            "(D) 只有 2、3"
        ],
        correctAnswer: "B",
        userNote: "EV71 (4) 是常見的神經性病毒。HPV、腺病毒、鼻病毒主要感染黏膜，極少侵犯中樞神經 [cite: 28, 31]。"
    },
    {
        id: "110-final-21",
        relatedPathogen: "General Virology",
        type: "Transmission",
        question: "下列哪些病毒會出現在呼吸道黏液中，藉由呼吸道飛沫傳播？ (1)人類乳突狀瘤病毒 (HPV) (2)腺病毒 (adenovirus) (3)鼻病毒 (rhinovirus) (4)A群克沙其病毒 (Coxsackievirus type A)",
        options: [
            "(A) 只有 3、4",
            "(B) 只有 1、2、4",
            "(C) 只有 2、3",
            "(D) 只有 2、3、4"
        ],
        correctAnswer: "D",
        userNote: "HPV (1) 主要經由接觸或性行為傳播，非飛沫傳播 [cite: 28, 31]。"
    },
    {
        id: "110-final-22",
        relatedPathogen: "General Virology",
        type: "Structure",
        question: "下列哪些病毒對 ether 處理有抗性 (resistance)？ (1)小兒麻痺病毒 (poliovirus) (2)腺病毒 (adenovirus) (3)單純疱疹病毒 (Herpes simplex virus) (4)狂犬病毒 (rabies virus)",
        options: [
            "(A) 只有 3、4",
            "(B) 只有 1、2",
            "(C) 只有 1、3",
            "(D) 只有 2、4"
        ],
        correctAnswer: "B",
        userNote: "對乙醚有抗性代表「無套膜」(Non-enveloped)。Polio 與 Adenovirus 為無套膜病毒 [cite: 28, 31]。"
    },
    {
        id: "110-final-23",
        relatedPathogen: "EBV",
        type: "Mechanism",
        question: "下列病毒相關的疾病中，何者有 chromosomal translocation 的現象？",
        options: [
            "(A) 無菌性腦膜炎 (aseptic meningitis)",
            "(B) Burkitt's lymphoma",
            "(C) Kaposi's sarcoma",
            "(D) 子宮頸癌 (Cervical cancer)"
        ],
        correctAnswer: "B",
        userNote: "Burkitt's lymphoma 常見第 8 對與第 14 對染色體轉位 t(8;14)，導致 c-myc 活化 [cite: 28, 31]。"
    },
    {
        id: "110-final-24",
        relatedPathogen: "Adenovirus",
        type: "Diagnosis",
        question: "在糞便檢體中，最可能檢測出下列何種型別的腺病毒 (adenovirus)？",
        options: [
            "(A) 4, 7",
            "(B) 11, 21",
            "(C) 2, 5",
            "(D) 40, 41"
        ],
        correctAnswer: "D",
        userNote: "Adenovirus serotypes 40, 41 為腸道型腺病毒，是兒童病毒性腸胃炎常見病原 [cite: 28, 31]。"
    },
    {
        id: "110-final-25",
        relatedPathogen: "General Virology",
        type: "Diagnosis",
        question: "下列哪些病毒的偵測必須使用 RT-PCR？ (1)鼻病毒 (rhinovirus) (2)腺病毒 (adenovirus) (3)單純疱疹病毒 (Herpes simplex virus) (4)腸病毒71型 (enterovirus 71)",
        options: [
            "(A) 只有 3、4",
            "(B) 只有 1、2",
            "(C) 只有 1、4",
            "(D) 只有 2、3"
        ],
        correctAnswer: "C",
        userNote: "RT-PCR 用於偵測 RNA 病毒。Rhinovirus 與 Enterovirus 為 RNA 病毒 [cite: 28, 31]。"
    },
    {
        id: "110-final-26",
        relatedPathogen: "HIV",
        type: "Structure",
        question: "下列何者為人類免疫缺陷病毒 (HIV) 負責吸附之套膜蛋白質？",
        options: [
            "(A) gp120",
            "(B) gp41",
            "(C) p53",
            "(D) HBsAg"
        ],
        correctAnswer: "A",
        userNote: "gp120 負責結合宿主細胞受體 (CD4)；gp41 負責膜融合 [cite: 42]。"
    },
    {
        id: "110-final-27",
        relatedPathogen: "HIV",
        type: "Genetics",
        question: "HIV 會因為對細胞親和性的不同，而區分為 X4 strain 或 R5 strain。請問下列那一個基因的點突變，會改變 HIV 對細胞的親和性？",
        options: [
            "(A) env",
            "(B) gag",
            "(C) tat",
            "(D) pol"
        ],
        correctAnswer: "A",
        userNote: "Env 基因編碼表面糖蛋白 (gp120)，決定對共受體 (CCR5 或 CXCR4) 的親和力 [cite: 42]。"
    },
    {
        id: "110-final-28",
        relatedPathogen: "HIV",
        type: "Transmission",
        question: "哪一種途徑不易傳播人類免疫缺陷病毒 (HIV)？",
        options: [
            "(A) 性行為 (sexual intercourse)",
            "(B) 輸血 (blood transfusion)",
            "(C) 呼吸道飛沫 (respiratory droplets)",
            "(D) 刺青 (tattoos)"
        ],
        correctAnswer: "C",
        userNote: "HIV 不會經由飛沫傳染 [cite: 42]。"
    },
    {
        id: "110-final-29",
        relatedPathogen: "HIV",
        type: "Treatment",
        question: "下列四種藥物都可用來治療 HIV-1 的感染，其中何種藥物作用機轉跟其它三者不同？",
        options: [
            "(A) Lamivudine (3TC)",
            "(B) Zidovudine (AZT)",
            "(C) Atazanavir (ATV)",
            "(D) Abacavir (ABC)"
        ],
        correctAnswer: "C",
       userNote: "Atazanavir 是蛋白酶抑制劑 (PI)；其餘三者為核苷類反轉錄酶抑制劑 (NRTI) [cite: 44]。"
    },
    {
        id: "110-final-30",
        relatedPathogen: "HIV",
        type: "Diagnosis",
        question: "下列何種血球細胞檢驗最能代表後天免疫不全症候群 (AIDS) 病人的疾病嚴重度？",
        options: [
            "(A) B 淋巴細胞 (B-lymphocyte)",
            "(B) CD4+ T 細胞 (CD4+ T-lymphocyte)",
            "(C) CD8+ T 細胞 (CD8+ T-lymphocyte)",
            "(D) 嗜中性白血球 (neutrophil)"
        ],
        correctAnswer: "B",
        userNote: "CD4+ T 細胞數目下降是 AIDS 病程與免疫功能缺損的主要指標 [cite: 44]。"
    },
    {
        id: "110-final-31",
        relatedPathogen: "HTLV-1",
        type: "Clinical",
        question: "關於第一型人類嗜 T 淋巴球病毒 (HTLV-1) 引起之人類急性 T 細胞白血病 (ATLL) 的敘述，下列何者錯誤？",
        options: [
            "(A) 可由輸血、性交以及哺乳傳染",
            "(B) 約一半的感染者會產生此病",
            "(C) 治療多用 azidothymidine 與 interferon-a",
            "(D) 此病之預後 (prognosis) 很差"
        ],
        correctAnswer: "B",
        userNote: "感染 HTLV-1 後，終身發展成 ATLL 的機率僅約 2-5%，並非一半 [cite: 44]。"
    },
    {
        id: "110-final-32",
        relatedPathogen: "RSV",
        type: "Diagnosis",
        question: "血球附著現象 (Hemadsorption) 不可用來初步認定下列那一種病毒培養？",
        options: [
            "(A) 呼吸道融合病毒 (Respiratory syncytial virus)",
            "(B) 副流行性感冒病毒 (Parainfluenza virus)",
            "(C) 腮腺炎病毒 (Mumps virus)",
            "(D) 麻疹病毒 (Measles virus)"
        ],
        correctAnswer: "A",
        userNote: "RSV 缺乏血球凝集素 (Hemagglutinin)，故無法產生血球附著現象 [cite: 44]。"
    },
    {
        id: "110-final-33",
        relatedPathogen: "Hepatitis A",
        type: "Classification",
        question: "下列那一種肝炎病毒與腸病毒 (Enterovirus) 在分類上最接近？",
        options: [
            "(A) HAV",
            "(B) HDV",
            "(C) HCV",
            "(D) HEV"
        ],
        correctAnswer: "A",
        userNote: "HAV 屬於小 RNA 病毒科 (Picornaviridae)，與腸病毒同科 [cite: 44]。"
    },
    {
        id: "110-final-34",
        relatedPathogen: "Hepatitis B",
        type: "Structure",
        question: "B 型肝炎病毒中何種蛋白可自行聚集形成大小形狀不一的顆粒？",
        options: [
            "(A) HBcAg",
            "(B) HBeAg",
            "(C) HBsAg",
            "(D) X protein"
        ],
        correctAnswer: "C",
        userNote: "HBsAg 會形成空的球形或管狀次病毒顆粒 (Subviral particles) 並釋放到血液中 [cite: 44]。"
    },
    {
        id: "110-final-35",
        relatedPathogen: "Hepatitis B",
        type: "Diagnosis",
        question: "某醫院工作人員被驗出有 HBsAg，繼而又被驗出 HBeAg。此醫院工作人員最可能是下列何情況？",
        options: [
            "(A) 有肝炎且有傳染力",
            "(B) 有肝炎但不具傳染力",
            "(C) 感染了 B 型及 C 型肝炎病毒",
            "(D) 此檢驗結果顯然是偽陽性"
        ],
        correctAnswer: "A",
        userNote: "HBeAg 陽性代表病毒複製活躍 (Active replication)，具有高傳染力 [cite: 44]。"
    },
    {
        id: "110-final-36",
        relatedPathogen: "Influenza/Paraflu",
        type: "Structure",
        question: "下列何者是流行性感冒病毒 (Influenza virus) 和副流行性感冒病毒 (Parainfluenza virus) 的不同點？",
        options: [
            "(A) 前者為正股 RNA 病毒，後者為負股 RNA 病毒",
            "(B) 前者為負股 RNA 病毒，後者為正股 RNA 病毒",
            "(C) 前者在細胞核複製，後者是在細胞質複製",
            "(D) 前者的基因體是不分段型，後者是分段型"
        ],
        correctAnswer: "C",
        userNote: "流感病毒 (Influenza) 在細胞核內複製（例外於大多數 RNA 病毒）；副流感則在細胞質 [cite: 46]。"
    },
    {
        id: "110-final-37",
        relatedPathogen: "Biosafety",
        type: "General",
        question: "有關生物安全等級-3 (BSL-3) 實驗室設計上的防護，下列敘述何者錯誤？",
        options: [
            "(A) 實驗室與走廊通道有物理性分隔",
            "(B) 具備可自動關的雙門，且雙門不會同時打開",
            "(C) 排放的廢氣不再循環",
            "(D) 正壓氣流進入實驗室"
        ],
        correctAnswer: "D",
        userNote: "BSL-3 實驗室應維持「負壓」，以防止病原外洩 [cite: 46]。"
    },
    {
        id: "110-final-38",
        relatedPathogen: "Mycology",
        type: "Structure",
        question: "構成真菌細胞壁之主要成分為何？",
        options: [
            "(A) 幾丁質以及 α-1-4-葡萄聚醣",
            "(B) 幾丁質以及 β-1-3-葡萄聚醣",
            "(C) 肽醣以及 β-1-4-葡萄聚醣",
            "(D) 幾丁質以及 α-1-6-葡萄聚醣"
        ],
        correctAnswer: "B",
        userNote: "真菌細胞壁主成分為幾丁質 (Chitin) 和 β-1-3-葡聚醣 (Glucan) [cite: 46]。"
    },
    {
        id: "110-final-39",
        relatedPathogen: "Candida",
        type: "Clinical",
        question: "常見於嬰孩口腔之鵝口瘡，是何種微生物感染？",
        options: [
            "(A) 新型隱球菌 (Cryptococcus neoformans)",
            "(B) 白色念珠菌 (C. albicans)",
            "(C) 金黃色葡萄球菌 (Staphylococcus aureus)",
            "(D) 淋病雙球菌 (Neisseria gonorrhoeae)"
        ],
        correctAnswer: "B",
        userNote: "鵝口瘡 (Thrush) 是白色念珠菌感染的典型臨床表現 [cite: 46]。"
    },
    {
        id: "110-final-40",
        relatedPathogen: "Flavivirus",
        type: "Comparison",
        question: "下列有關日本腦炎病毒與登革熱病毒特性之敘述，何者正確？",
        options: [
            "(A) 均可注射疫苗，預防感染",
            "(B) 被感染之宿主可再直接散播病毒",
            "(C) 均由埃及斑蚊傳播",
            "(D) 感染後均產生感冒般症狀"
        ],
        correctAnswer: "A",
        userNote: "日本腦炎有成熟疫苗；登革熱疫苗 (如 Dengvaxia/Qdenga) 也已問世。且日本腦炎人為終端宿主不會直接傳播 [cite: 46]。"
    },
    {
        id: "110-final-41",
        relatedPathogen: "Measles",
        type: "Clinical",
        question: "病毒感染，有時可呈現特殊病徵，藉以診斷。其中，病人的口腔若出現柯氏斑點（Koplik's spot）表示何種病毒感染？",
        options: [
            "(A) 麻疹病毒 (Measles virus)",
            "(B) 德國麻疹病毒 (Rubella virus)",
            "(C) 腮腺炎病毒 (Mumps virus)",
            "(D) 單純疱疹病毒 (Herpes simplex virus)"
        ],
        correctAnswer: "A",
        userNote: "依據題意 Koplik's spot 對應麻疹病毒 (A)。 [cite: 46]。"
    },
    {
        id: "110-final-42",
        relatedPathogen: "Influenza",
        type: "Immunology",
        question: "一個曾經被流感病毒感染過的人，其體內最具中和性保護力的抗體，應具有辨識那一種病毒蛋白質的能力？",
        options: [
            "(A) 血球凝集素 (Hemagglutinin)",
            "(B) 基質蛋白 (Matrix protein)",
            "(C) 核套蛋白 (Nucleocapsid)",
            "(D) 非結構蛋白 (Non-structural protein)"
        ],
        correctAnswer: "A",
        userNote: "Anti-HA 抗體可阻斷病毒吸附宿主細胞，是主要的中和抗體 [cite: 46]。"
    },
    {
        id: "110-final-43",
        relatedPathogen: "Mumps",
        type: "Clinical",
        question: "下列何種病毒，會引起睪丸、卵巢、胰臟等腺體發炎之病症？",
        options: [
            "(A) 麻疹病毒 (Measles virus)",
            "(B) 呼吸道融合病毒 (Respiratory syncytial virus)",
            "(C) 副流行性感冒病毒 (Parainfluenza virus)",
            "(D) 腮腺炎病毒 (Mumps virus)"
        ],
        correctAnswer: "D",
        userNote: "腮腺炎病毒除造成腮腺炎外，常見併發症為睪丸炎 (Orchitis) 與胰臟炎 [cite: 48]。"
    },
    {
        id: "110-final-44",
        relatedPathogen: "Hepatitis D",
        type: "Clinical",
        question: "病患若先感染 B 型肝炎病毒後，再感染下列何種肝炎病毒，極易引發猛爆性肝炎？",
        options: [
            "(A) A 型 (HAV)",
            "(B) C 型 (HCV)",
            "(C) D 型 (HDV)",
            "(D) E 型 (HEV)"
        ],
        correctAnswer: "C",
        userNote: "HDV 是缺陷病毒，需藉由 HBV 的外殼才能複製 (Superinfection)，易引發猛爆性肝炎 [cite: 48]。"
    },
    {
        id: "110-final-45",
        relatedPathogen: "General Virology",
        type: "Immunology",
        question: "感染下列那些病毒後，病人可獲得終身免疫力 (1)麻疹病毒 (Measles virus) (2)單純疱疹病毒 (Herpes simplex virus) (3)腺病毒 (Adenovirus) (4)腮腺炎病毒 (Mumps virus)",
        options: [
            "(A) 1, 2",
            "(B) 3, 4",
            "(C) 1, 3",
            "(D) 1, 4"
        ],
        correctAnswer: "D",
        userNote: "麻疹與腮腺炎感染後通常可獲得終身免疫；HSV 會終身潛伏復發 [cite: 48]。"
    },
    {
        id: "110-final-46",
        relatedPathogen: "Mycology",
        type: "Clinical",
        question: "有關花斑癬 (pityriasis versicolor) 之敘述，下列何者錯誤？",
        options: [
            "(A) 最常見於年輕人",
            "(B) 致病原為粃糠馬拉色菌綜合菌 (Malassezia furfur complex)",
            "(C) 致病原未歸類為自然界腐生菌",
            "(D) 無法由檢體直接做鏡檢診斷"
        ],
        correctAnswer: "D",
        userNote: "花斑癬可直接利用 KOH 鏡檢，典型特徵為「義大利麵加肉丸」(spaghetti and meatballs) [cite: 48]。"
    },
    {
        id: "110-final-47",
        relatedPathogen: "General Virology",
        type: "Vaccine",
        question: "下列何種病毒目前尚無有效的疫苗可以預防感染？",
        options: [
            "(A) 小兒麻痺病毒 (Poliovirus)",
            "(B) 登革熱病毒 (Dengue virus)",
            "(C) 麻疹病毒 (Measles virus)",
            "(D) 流行性感冒病毒 (Influenza virus)"
        ],
        correctAnswer: "B",
        userNote: "相較於其他三者（皆有常規疫苗），登革熱疫苗應用限制較多，非全面施打 [cite: 48]。"
    },
    {
        id: "110-final-48",
        relatedPathogen: "Influenza/Varicella",
        type: "Clinical",
        question: "感染下列何種病毒，若自行服用阿司匹靈 (Aspirin) 等水楊酸類退燒藥物後，最易增加兒童罹患雷氏症候群 (Reye syndrome) 的風險？",
        options: [
            "(A) 德國麻疹病毒 (Rubella virus)",
            "(B) 麻疹病毒 (Measles virus)",
            "(C) 流感病毒 (Influenza virus)",
            "(D) 狂犬病病毒 (Rabies virus)"
        ],
        correctAnswer: "C",
        userNote: "雷氏症候群主要與流感 (Influenza) 和水痘 (Varicella) 感染後使用 Aspirin 有關 [cite: 48]。"
    },
    {
        id: "110-final-49",
        relatedPathogen: "Influenza",
        type: "Virology",
        question: "下列有關流感病毒 (influenza virus) 的敘述，何者錯誤？",
        options: [
            "(A) 利用 NP 與 M1 蛋白的差異，來區別流感病毒 A、B、C 三型",
            "(B) 利用 HA 與 NA 蛋白的差異，來區別 A 型流感病毒的亞型",
            "(C) A、B、C 三型中，抗原變異最大的是 A 型",
            "(D) C 型曾造成大流行"
        ],
        correctAnswer: "D",
        userNote: "C 型流感通常只引起輕微散發病例，不會造成大流行 (Pandemic) [cite: 48]。"
    },
    {
        id: "110-final-50",
        relatedPathogen: "Mycology",
        type: "Structure",
        question: "真菌之無性孢子 (asexual spores) 可分成那兩大類？",
        options: [
            "(A) 分生孢子 (conidia) 及囊孢子 (sporangiospores)",
            "(B) 瓶孢子 (phialides) 及分節孢子 (arthrospores)",
            "(C) 厚膜孢子 (chlamydospores) 及分節孢子 (arthrospores)",
            "(D) 分節孢子 (arthrospores) 及芽生孢子 (blastospores)"
        ],
        correctAnswer: "A",
        userNote: "無性孢子主要依據是否生成於囊內 (Sporangium) 區分為 Conidia (外生) 與 Sporangiospores (內生) [cite: 48]。"
    },

    // -------國考考古題總彙編------- //

    {
        id: "999-national-01",
        relatedPathogen: "clostridium_tetani",
        type: "basic",
        question: "下列各類致病菌中，何者只需中和抗體（neutralizing antibody）就可中和毒素而不致病？",
        options: [
            "(A) 金黃色葡萄球菌（Staphylococcus aureus）",
            "(B) 白色念珠菌（Candida albicans）",
            "(C) 麻瘋桿菌（Mycobacterium leprae）",
            "(D) 破傷風桿菌（Clostridium tetani）"
        ],
        correctAnswer: "D",
        userNote: "國考重點題：外毒素致病只需中和抗體"
    },
    {
        id: "999-national-02",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "在流行性感冒病毒（influenza virus）感染時，下列何種抗原所誘發的抗體較具保護性：",
        options: [
            "(A) M protein",
            "(B) non-structural protein",
            "(C) haemagglutinin (HA)",
            "(D) nucleocapsid"
        ],
        correctAnswer: "C",
        userNote: "HA 抗體具中和病毒進入細胞的能力"
    },
    {
        id: "999-national-03",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "下列關於流行性感冒病毒（Influenza virus）的抗原大變異（antigenic shift）之敘述，何者錯誤？",
        options: [
            "(A) 是指不同病毒株之各段 RNA 基因體間的交換所造成的變異",
            "(B) 又稱為基因重組（genetic reassortment）",
            "(C) 是造成流行性感冒病毒世界性大流行（pandemic）的主要原因",
            "(D) 可見於 A 型及 B 型流行性感冒病毒"
        ],
        correctAnswer: "D",
        userNote: "Shift 只發生在 A 型（因其宿主範圍廣且具片段基因）"
    },
    {
        id: "999-national-04",
        relatedPathogen: "measles_mumps_rubella",
        type: "basic",
        question: "MMR 為混合疫苗，不能對抗下列何種病毒？",
        options: [
            "(A) 腮腺炎病毒（Mumps virus）",
            "(B) 麻疹病毒（Measles virus）",
            "(C) 輪狀病毒（Rotavirus）",
            "(D) 德國麻疹病毒（Rubella virus）"
        ],
        correctAnswer: "C",
        userNote: "MMR 包含 Measles, Mumps, Rubella"
    },
    {
        id: "999-national-05",
        relatedPathogen: "hbv",
        type: "basic",
        question: "目前國內接種的 B 型肝炎疫苗是屬於：",
        options: [
            "(A) 死病毒（Killed virus）",
            "(B) 活減毒疫苗（Live attenuated virus）",
            "(C) 活病毒（Live virus）",
            "(D) 基因重組次單位疫苗（subunit vaccine）"
        ],
        correctAnswer: "D",
        userNote: "HBsAg 重組蛋白疫苗"
    },
    {
        id: "999-national-06",
        relatedPathogen: "jev",
        type: "virology",
        question: "日本腦炎病毒（Japanese encephalitis virus）藉由下列何者媒介傳播？",
        options: [
            "(A) 三斑家蚊",
            "(B) 采采蠅",
            "(C) 白蛉子",
            "(D) 老鼠"
        ],
        correctAnswer: "A",
        userNote: "三斑家蚊為主要病媒"
    },
    {
        id: "999-national-07",
        relatedPathogen: "measles_virus",
        type: "clinical",
        question: "在嬰幼兒時感染下列何種病毒，於年長時會造成腦炎，其症狀是癡呆、智力退化、甚至死亡，此症狀稱亞急性硬化泛腦炎（subacute sclerosing panencephalitis, SSPE）？",
        options: [
            "(A) 感冒病毒",
            "(B) 腮腺炎病毒",
            "(C) 麻疹病毒",
            "(D) 小兒麻痺症病毒"
        ],
        correctAnswer: "C",
        userNote: "SSPE 為麻疹病毒的長期併發症"
    },
    {
        id: "999-national-08",
        relatedPathogen: "hepatitis_virus",
        type: "virology",
        question: "下列那一種敘述符合 HAV、HCV、HDV 及 HEV 的共同特徵？",
        options: [
            "(A) 含單股（single-stranded）RNA 基因體",
            "(B) 是糞-口（fecal-oral route）傳播路徑",
            "(C) 造成猛爆性肝炎",
            "(D) 在慢性感染時易造成宿主基因序列變異"
        ],
        correctAnswer: "A",
        userNote: "除了 HBV 是 DNA 外，其餘肝炎病毒皆為 RNA 病毒"
    },
    {
        id: "999-national-09",
        relatedPathogen: "fungi_dermatophytes",
        type: "mycology",
        question: "下列那一種真菌屬於淺部皮膚感染真菌？",
        options: [
            "(A) 白色念珠菌（Candida albicans）",
            "(B) 新形隱球菌（Cryptococcus neoformans）",
            "(C) 白癬菌（Trichophyton tonsurans）",
            "(D) 申克氏孢絲菌（Sporothrix schenckii）"
        ],
        correctAnswer: "C",
        userNote: "Trichophyton 為典型皮癬菌"
    },
    {
        id: "999-national-10",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "致病性黴菌在分類學上多屬於何種亞門？",
        options: [
            "(A) 不完全菌亞門 (Deuteromycotina)",
            "(B) 擔子菌亞門 (Basidiomycotina)",
            "(C) 子囊菌亞門 (Ascomycotina)",
            "(D) 接合菌亞門 (Zygomycotina)"
        ],
        correctAnswer: "A",
        userNote: "許多致病真菌尚未發現有性世代，歸類於不完全菌"
    },
    {
        id: "999-national-11",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "Amphotericin B 破壞真菌細胞的主要標的是下列那一項？",
        options: [
            "(A) 細胞壁",
            "(B) 細胞膜",
            "(C) 核酸",
            "(D) 能量傳遞"
        ],
        correctAnswer: "B",
        userNote: "與細胞膜上的麥角固醇 (ergosterol) 結合造成孔洞"
    },
    {
        id: "999-national-12",
        relatedPathogen: "candida_albicans",
        type: "mycology",
        question: "白色念珠菌（Candida albicans）可引起的感染不包括下列那一項？",
        options: [
            "(A) 黏膜感染",
            "(B) 皮膚感染",
            "(C) 產毒性感染",
            "(D) 臟器感染"
        ],
        correctAnswer: "C",
        userNote: "念珠菌主要引起侵入性感染而非產生毒素中毒"
    },
    {
        id: "999-national-13",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "下列有關流行性感冒病毒（Influenza virus）之敘述，何者錯誤？",
        options: [
            "(A) 其外套膜上有兩個基因產物：血球凝集素（HA）以及神經胺酸酶（NA）",
            "(B) HA 及 NA 可以決定流行性感冒病毒的抗原性",
            "(C) HA 可以造成紅血球凝集",
            "(D) NA 可以和此病毒之細胞受器（receptor）即唾液酸（sialic acid）結合"
        ],
        correctAnswer: "D",
        userNote: "結合受器的是 HA，NA 是負責水解唾液酸讓病毒釋放"
    },
    {
        id: "999-national-14",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "在細胞核內進行複製之 RNA 病毒為何種病毒？",
        options: [
            "(A) 流行性感冒病毒（Influenza virus）",
            "(B) 小兒麻痺病毒（Poliovirus）",
            "(C) 疱疹病毒（Herpesvirus）",
            "(D) 登革熱病毒（Dengue virus）"
        ],
        correctAnswer: "A",
        userNote: "Orthomyxovirus 是少數在核內複製的 RNA 病毒"
    },
    {
        id: "999-national-15",
        relatedPathogen: "arboviruses",
        type: "virology",
        question: "下列那一種病毒不屬於節肢動物媒介（Arthropod-borne）感染？",
        options: [
            "(A) 披膜病毒（Togaviruses）",
            "(B) 黃病毒（Flaviviruses）",
            "(C) α 病毒（Alphaviruses）",
            "(D) 沙狀病毒（Arenaviruses）"
        ],
        correctAnswer: "A/D",
        userNote: "Arenaviruses 為齧齒類傳播；Togaviruses 中的 Rubella 非節肢動物傳播"
    },
    {
        id: "999-national-16",
        relatedPathogen: "mycotoxicosis",
        type: "mycology",
        question: "下列有關真菌中毒症（Mycotoxicosis）的特徵，何者錯誤？",
        options: [
            "(A) 真菌產生的毒素所引起",
            "(B) 發病有地區性",
            "(C) 發病有季節性",
            "(D) 具有傳染性"
        ],
        correctAnswer: "D",
        userNote: "中毒症是食入毒素，不具人傳人性"
    },
    {
        id: "999-national-17",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "真菌菌絲的細胞壁結構不包括：",
        options: [
            "(A) 葡聚糖層（polysaccharide layer）",
            "(B) 脂多醣層（lipopolysaccharide layer）",
            "(C) 糖蛋白（glycoprotein）",
            "(D) 幾丁質層（chitin layer）"
        ],
        correctAnswer: "B",
        userNote: "LPS 是革蘭氏陰性菌的特徵"
    },
    {
        id: "999-national-18",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "唑（Azole）類抗黴菌劑的作用機轉是：",
        options: [
            "(A) 抑制蛋白質合成",
            "(B) 抑制細胞膜生成",
            "(C) 抑制核酸合成",
            "(D) 抑制細胞壁生成"
        ],
        correctAnswer: "B",
        userNote: "抑制 ergosterol 的生合成步驟"
    },
    {
        id: "999-national-19",
        relatedPathogen: "pneumocystis_jirovecii",
        type: "clinical",
        question: "愛滋病（AIDS）患者最常見的條件致病性真菌感染為：",
        options: [
            "(A) 白色念珠菌（Candida albicans）引起的肺部感染",
            "(B) 新型隱球菌（Cryptococcus neoformans）引起的肺部感染",
            "(C) 卡氏肺囊蟲肺炎（Pneumocystis carinii pneumonia, PCP）",
            "(D) 毛癬菌（Trichophyton）引起的組織性壞死"
        ],
        correctAnswer: "C",
        userNote: "PCP 為 AIDS 典型的定義疾病"
    },
    {
        id: "999-national-20",
        relatedPathogen: "yeast",
        type: "mycology",
        question: "單細胞真菌（Yeast）的繁殖方式是：",
        options: [
            "(A) 二分裂",
            "(B) 出芽 (Budding)",
            "(C) 由孢子囊釋放孢子",
            "(D) 接合"
        ],
        correctAnswer: "A/B",
        userNote: "主要是出芽生殖，部分可二分裂"
    },
    {
        id: "999-national-21",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "下列關於流行性感冒病毒（Influenza virus）之敘述，何者為錯？",
        options: [
            "(A) 分類上屬於正黏液病毒科（Orthomyxoviridae）",
            "(B) 其基因體由八段單股 RNA 組成",
            "(C) 包括 A、B、C 三型",
            "(D) 其中只有 A 型造成人類疾病"
        ],
        correctAnswer: "B/D",
        userNote: "A/B/C 皆可感染人；C 型基因體僅七段"
    },
    {
        id: "999-national-22",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "真菌細胞壁特有的成分是：",
        options: [
            "(A) 麥角醇 (Ergosterol)",
            "(B) 幾丁質 (Chitin)",
            "(C) 角質",
            "(D) 醣苷類"
        ],
        correctAnswer: "B",
        userNote: "注意！細胞壁是幾丁質，細胞膜是麥角醇"
    },
    {
        id: "999-national-23",
        relatedPathogen: "fungi_immunity",
        type: "basic",
        question: "抗真菌感染最主要的天然防禦因素是：",
        options: [
            "(A) 皮膚與黏膜",
            "(B) 嗜中性白血球（neutrophil）",
            "(C) 巨噬細胞（macrophage）",
            "(D) 補體（complement）"
        ],
        correctAnswer: "A",
        userNote: "第一道物理防線最為重要"
    },
    {
        id: "999-national-24",
        relatedPathogen: "cryptococcus_neoformans",
        type: "mycology",
        question: "常存在鴿糞中，會造成腦膜炎之致病菌為：",
        options: [
            "(A) 申克氏孢絲菌（Sporothrix schenckii）",
            "(B) 黃色麴菌（Aspergillus flavus）",
            "(C) 新型隱球菌（Cryptococcus neoformans）",
            "(D) 白色念珠菌（Candida albicans）"
        ],
        correctAnswer: "C",
        userNote: "隱球菌常見於鴿糞，具寬厚莢膜"
    },
    {
        id: "999-national-25",
        relatedPathogen: "hiv_aids",
        type: "clinical",
        question: "以下何者容易出現病毒相關性腫瘤？",
        options: [
            "(A) Leishmaniasis 患者",
            "(B) Legionella pneumonia 患者",
            "(C) IgA nephropathy 患者",
            "(D) AIDS 患者"
        ],
        correctAnswer: "D",
        userNote: "如 Kaposi sarcoma (HHV-8)"
    },
    {
        id: "999-national-26",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "關於流行性感冒病毒 A/Bangkok/1/79（H3N2）之命名，下列敘述何者錯誤？",
        options: [
            "(A) A 代表此為 A 型",
            "(B) Bangkok 代表其最早分離的地點",
            "(C) 1/79 代表此病毒株之序號",
            "(D) H3N2 代表 HA 抗原為第三型，NA 為第二型"
        ],
        correctAnswer: "C",
        userNote: "1/79 中，1 是序號，79 是分離年份"
    },
    {
        id: "999-national-27",
        relatedPathogen: "ebola_virus",
        type: "virology",
        question: "關於伊波拉病毒（Ebola virus）之敘述，何者為錯？",
        options: [
            "(A) 是 RNA 病毒",
            "(B) 可引起病毒性出血熱",
            "(C) 流行於非洲",
            "(D) 處理此病毒需要第三級的生物安全實驗室"
        ],
        correctAnswer: "D",
        userNote: "需要最高等級 BSL-4"
    },
    {
        id: "999-national-28",
        relatedPathogen: "fungi_reproduction",
        type: "mycology",
        question: "真菌中最常見的無性孢子是何種孢子？",
        options: [
            "(A) 分生孢子 (Conidia)",
            "(B) 芽生孢子 (Blastoconidia)",
            "(C) 孢子囊孢子 (Sporangiospores)",
            "(D) 厚膜孢子 (Chlamydospores)"
        ],
        correctAnswer: "A",
        userNote: "Conidia 是大多數絲狀真菌的無性產物"
    },
    {
        id: "999-national-29",
        relatedPathogen: "cryptococcus_neoformans",
        type: "mycology",
        question: "新型隱球菌（Cryptococcus neoformans）的特徵，不包括下列那一項？",
        options: [
            "(A) 有莢膜 (Capsule)",
            "(B) 能形成厚膜孢子",
            "(C) 引起皮膚黏膜感染",
            "(D) 通過呼吸道侵入人體"
        ],
        correctAnswer: "C",
        userNote: "主要引起肺部感染與腦膜炎"
    },
    {
        id: "999-national-30",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "培養真菌常用何種培養基？",
        options: [
            "(A) 巧克力培養基",
            "(B) 沙保羅氏（Sabouraud's dextrose agar, SDA）培養基",
            "(C) Thioglycollate 培養基",
            "(D) 血清培養基"
        ],
        correctAnswer: "B",
        userNote: "SDA 低 pH 值適合真菌生長"
    },
    {
        id: "999-national-31",
        relatedPathogen: "candida_albicans",
        type: "clinical",
        question: "白色念珠菌（Candida albicans）可引起下列何種疾病？",
        options: [
            "(A) 肺炎",
            "(B) 鵝口瘡 (Thrush)",
            "(C) 紅疹",
            "(D) 咽喉炎"
        ],
        correctAnswer: "B",
        userNote: "口腔念珠菌症稱為鵝口瘡"
    },
    {
        id: "999-national-32",
        relatedPathogen: "virology_general",
        type: "virology",
        question: "下列何種病毒具有血球凝集性（hemagglutination）？",
        options: [
            "(A) EB 病毒",
            "(B) 小兒麻痺病毒",
            "(C) 小 DNA 病毒（Parvovirus）B19",
            "(D) 流行性感冒病毒（Influenza virus）"
        ],
        correctAnswer: "C/D",
        userNote: "Flu 與 B19 皆具備此特性"
    },
    {
        id: "999-national-33",
        relatedPathogen: "arenavirus",
        type: "virology",
        question: "下列有關沙狀病毒（Arenavirus）之敘述，何者正確？",
        options: [
            "(A) 以節肢動物為媒介",
            "(B) 感染腸胃道",
            "(C) 以囓齒動物為媒介的 RNA 病毒",
            "(D) 以狗為媒介"
        ],
        correctAnswer: "C",
        userNote: "如 Lassa virus，宿主為老鼠"
    },
    {
        id: "999-national-34",
        relatedPathogen: "hev",
        type: "virology",
        question: "有關 E 型肝炎病毒（HEV）之敘述，下列何者正確？",
        options: [
            "(A) 對孕婦造成高死亡率",
            "(B) 經由血液傳播",
            "(C) 是黃熱病病毒的一種",
            "(D) 是一種負股 RNA 病毒"
        ],
        correctAnswer: "A",
        userNote: "HEV 在孕婦感染時死亡率可達 20%"
    },
    {
        id: "999-national-35",
        relatedPathogen: "mycotoxicosis",
        type: "mycology",
        question: "真菌毒素對人類的危害通常不包括：",
        options: [
            "(A) 致癌作用",
            "(B) 過敏反應",
            "(C) 慢性中毒",
            "(D) 致畸胎作用"
        ],
        correctAnswer: "D",
        userNote: "主要為致癌（如黃麴毒素）或急性中毒"
    },
    {
        id: "999-national-36",
        relatedPathogen: "candida_albicans",
        type: "clinical",
        question: "白色念珠菌（Candida albicans）引起的病變，不包括下列那一項？",
        options: [
            "(A) 濕疹",
            "(B) 鵝口瘡",
            "(C) 陰道炎",
            "(D) 腦膜炎"
        ],
        correctAnswer: "A",
        userNote: "濕疹通常非真菌直接引起"
    },
    {
        id: "999-national-37",
        relatedPathogen: "cryptococcus_neoformans",
        type: "mycology",
        question: "關於新型隱球菌（Cryptococcus neoformans）致病性的描述，下列何者錯誤？",
        options: [
            "(A) 主要致病物質是莢膜多糖",
            "(B) 大多數感染者症狀不明顯",
            "(C) 主要經腸胃道入侵人體",
            "(D) 抵抗力降低時，才易侵入人體"
        ],
        correctAnswer: "C",
        userNote: "主要是經由呼吸道吸入孢子"
    },
    {
        id: "999-national-38",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "關於“真菌”的敘述，下列何者錯誤？",
        options: [
            "(A) 有典型的細胞核",
            "(B) 細胞壁特有成分是幾丁質",
            "(C) 最適生長 pH 值為 4.0~6.0",
            "(D) 最適生長溫度為 37°C"
        ],
        correctAnswer: "D",
        userNote: "多數真菌生長最適溫為 25-30°C（除了一些兩型性真菌在人體內）"
    },
    {
        id: "999-national-39",
        relatedPathogen: "ortho_paramyxoviridae",
        type: "virology",
        question: "有關正黏液病毒（Orthomyxoviridae）及副黏液病毒（Paramyxoviridae）比較之敘述，何者正確？",
        options: [
            "(A) 兩者都會造成細胞融合（Syncytium）",
            "(B) 基因體皆有分段（segmented）",
            "(C) 兩者 RNA splicing 皆發生在核內",
            "(D) 兩者皆可經由呼吸道傳染"
        ],
        correctAnswer: "D",
        userNote: "Paramyxo 才有細胞融合 (F protein)；Ortho 才有分段基因"
    },
    {
        id: "999-national-40",
        relatedPathogen: "jev",
        type: "clinical",
        question: "某國小女童，農村背景（雞鴨豬），八月突然高燒、抽筋、意識不清、角弓反張、牙關緊閉。可能病原？",
        options: [
            "(A) 登革病毒",
            "(B) 禽流感病毒",
            "(C) 日本腦炎病毒（JEV）",
            "(D) C 型肝炎病毒"
        ],
        correctAnswer: "C",
        userNote: "夏季流行、豬為中間宿主、典型中樞神經症狀"
    },
    {
        id: "999-national-41",
        relatedPathogen: "cryptococcus_neoformans",
        type: "mycology",
        question: "新型隱球菌（Cryptococcus neoformans）形態上之特徵為何？",
        options: [
            "(A) 無莢膜之兩型性圓球狀酵母菌",
            "(B) 雪茄型酵母菌，不具兩型性",
            "(C) 中裂型具有薄層莢膜兩型性橢圓形酵母菌",
            "(D) 具寬厚莢膜圓球狀酵母菌"
        ],
        correctAnswer: "D",
        userNote: "India ink 染色可見明顯莢膜負染"
    },
    {
        id: "999-national-42",
        relatedPathogen: "zygomycosis",
        type: "mycology",
        question: "病患肺部檢體 PAS 染色發現寬闊帶狀（Broad, ribbon-like），無隔膜菌絲（Coenocytic hyphae），診斷為：",
        options: [
            "(A) 新型隱球菌症",
            "(B) 麴菌症",
            "(C) 孢子絲菌症",
            "(D) 接合菌症 (Zygomycosis)"
        ],
        correctAnswer: "D",
        userNote: "Zygomycetes (如 Rhizopus) 的特徵：無隔膜、直角分枝"
    },
    {
        id: "999-national-43",
        relatedPathogen: "parainfluenza_rsv",
        type: "clinical",
        question: "25 歲護士，咳嗽發出“吠”聲 (barking cough)，X 光見下聲門明顯變窄 (steeple sign)。病原？",
        options: [
            "(A) 副流行性感冒病毒 (Parainfluenza virus)",
            "(B) 流行性感冒病毒",
            "(C) 呼吸道細胞融合病毒 (RSV)",
            "(D) 鼻病毒"
        ],
        correctAnswer: "A/C",
        userNote: "吠聲咳嗽為哮吼 (Croup) 典型特徵，主因副流感"
    },
    {
        id: "999-national-44",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "構成真菌細胞壁之主要成分為何？",
        options: [
            "(A) 幾丁質以及 α-1-4-葡萄聚醣",
            "(B) 幾丁質以及 β-1-3-葡萄聚醣 (β-1-3-glucan)",
            "(C) 肽醣以及 β-1-4-葡萄聚醣",
            "(D) 幾丁質以及 α-1-6-葡萄聚醣"
        ],
        correctAnswer: "B",
        userNote: "Chitin + Glucan 為真菌壁核心結構"
    },
    {
        id: "999-national-45",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "下列何者屬於 Azoles 類中的 Imidazoles？",
        options: [
            "(A) Fluconazole",
            "(B) Ketoconazole",
            "(C) Itraconazole",
            "(D) Voriconazole"
        ],
        correctAnswer: "B",
        userNote: "Keto 是 Imidazole，其餘多為 Triazole"
    },
    {
        id: "999-national-46",
        relatedPathogen: "candida_albicans",
        type: "clinical",
        question: "指甲中有酵母菌及菌絲，培養見乳白色菌落，具假菌絲及芽管 (Germ tube) 產生。病原？",
        options: [
            "(A) Trichophyton rubrum",
            "(B) Epidermophyton floccosum",
            "(C) Microsporum canis",
            "(D) Candida albicans"
        ],
        correctAnswer: "D",
        userNote: "Germ tube test (+) 是 C. albicans 的黃金標準"
    },
    {
        id: "999-national-47",
        relatedPathogen: "hcv",
        type: "virology",
        question: "有關 C 型肝炎病毒的敘述，何者錯誤？",
        options: [
            "(A) 屬於 Flaviviridae",
            "(B) 具有 envelope",
            "(C) 已經有疫苗可以預防感染",
            "(D) 與肝癌有關"
        ],
        correctAnswer: "C",
        userNote: "HCV 目前尚無疫苗可供使用"
    },
    {
        id: "999-national-48",
        relatedPathogen: "rubella_virus",
        type: "clinical",
        question: "孕婦感染下列何種病毒，最容易造成胎兒先天性畸形？",
        options: [
            "(A) 單純疱疹病毒一型",
            "(B) 帶狀疱疹病毒",
            "(C) 德國麻疹病毒 (Rubella virus)",
            "(D) 麻疹病毒"
        ],
        correctAnswer: "C",
        userNote: "Congenital Rubella Syndrome (CRS)"
    },
    {
        id: "999-national-49",
        relatedPathogen: "orthomyxovirus",
        type: "virology",
        question: "下列那一種病毒需進入寄主細胞之細胞核進行基因體複製？",
        options: [
            "(A) Poxvirus",
            "(B) Paramyxovirus",
            "(C) Bunyavirus",
            "(D) Orthomyxovirus"
        ],
        correctAnswer: "D",
        userNote: "與第 14 題重複重點：流感病毒在核內複製"
    },
    {
        id: "999-national-50",
        relatedPathogen: "measles_mumps_rubella",
        type: "basic",
        question: "使用於孩童之 MMR 三合一減毒疫苗，包含那三種病毒？",
        options: [
            "(A) Measles-Mumps-Rubella",
            "(B) Measles-Mumps-Rotavirus",
            "(C) Measles-Mumps-Reovirus",
            "(D) Measles-Mumps-Rhinovirus"
        ],
        correctAnswer: "A",
        userNote: "與第 4 題重複重點"
    },
    {
        id: "999-national-51",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "下列有關流行性感冒病毒的敘述，何者錯誤？",
        options: [
            "(A) 基因含多段，因此重組現象普遍發生",
            "(B) 共分 A、B、C 三型",
            "(C) B 型常造成全世界大流行",
            "(D) 病毒感染後，續發性細菌感染常引起肺炎"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "全世界大流行 (Pandemic) 主要由 A 型引起 [cite: 51]"
    },
    {
        id: "999-national-52",
        relatedPathogen: "dengue_virus",
        type: "clinical",
        question: "診斷為登革病毒（dengue viruses）感染的臨床症狀包含：①紅疹 ②關節炎 ③血小板減少 ④出血熱",
        options: [
            "(A) ①②③",
            "(B) ①②④",
            "(C) ②③④",
            "(D) ①③④",
            "(全) 以上皆是"
        ],
        correctAnswer: "全",
        [cite_start]userNote: "登革熱典型症狀包含發燒、出疹、骨頭痛及血小板低下 [cite: 52]"
    },
    {
        id: "999-national-53",
        relatedPathogen: "talaromyces_marneffei",
        type: "mycology",
        question: "目前唯一會對人類造成全身性感染之青黴菌屬（Penicillium），其兩型性（Dimorphic）病原為何？",
        options: [
            "(A) P. marneffei",
            "(B) P. notutum",
            "(C) P. chrysogenum",
            "(D) P. claviformes"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "現已改名為 Talaromyces marneffei，東南亞愛滋病患常見 [cite: 53]"
    },
    {
        id: "999-national-54",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "抑制真菌 DNA 及 RNA 合成之抗真菌藥物為何？",
        options: [
            "(A) Terbinafine",
            "(B) Amphotericin B",
            "(C) Flucytosine",
            "(D) Fluconazole"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "Flucytosine (5-FC) 會轉化為 5-FU 抑制核酸合成 [cite: 54]"
    },
    {
        id: "999-national-55",
        relatedPathogen: "sporothrix_schenckii",
        type: "clinical",
        question: "右手肘被樹枝穿刺後出現直線排列之潰瘍及節瘤，25°C 培養長出玫瑰花飾（Rosette）排列之分生孢子，病原為何？",
        options: [
            "(A) Conidiobolus coronatus",
            "(B) Sporothrix schenckii",
            "(C) Mycobacterium marinum",
            "(D) Staphylococcus aureus"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "孢子絲菌症 (Sporotrichosis)，典型臨床表現為沿淋巴管排列之結節 [cite: 55]"
    },
    {
        id: "999-national-56",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "下列何者不是導致流感病毒產生抗原飄移（antigenic drift）之原因？",
        options: [
            "(A) 當兩種病毒發生基因重分配（genetic reassortment）所致",
            "(B) 因為病毒合成 RNA 常發生錯誤、引起突變所致",
            "(C) 常發生於血球凝集素基因",
            "(D) 常發生於神經胺酸酶基因"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "基因重分配 (Reassortment) 是造成抗原大變異 (Shift) 的原因 [cite: 56]"
    },
    {
        id: "999-national-57",
        relatedPathogen: "rubella_virus",
        type: "clinical",
        question: "孕婦何時感染 rubella virus 最容易造成先天性胎兒畸形？",
        options: [
            "(A) 懷孕初期三個月",
            "(B) 懷孕中期三個月",
            "(C) 懷孕後期三個月",
            "(D) 周產期"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "懷孕首三月 (First trimester) 感染風險最高 [cite: 57]"
    },
    {
        id: "999-national-58",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "下列何種黴菌為主要病原菌（primary pathogen）？",
        options: [
            "(A) Aspergillus niger",
            "(B) Cryptococcus neoformans",
            "(C) Candida albicans",
            "(D) Paracoccidioides brasiliensis"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "Paracoccidioides 屬於地方性兩型性真菌，為主要病原 [cite: 58]"
    },
    {
        id: "999-national-59",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "下列何者不是導致伺機性黴菌感染疾病之重要誘導因素（predisposing factor）？",
        options: [
            "(A) 服用抗微生物藥物",
            "(B) 惡性腫瘤",
            "(C) 外科手術或燒傷",
            "(D) 男女性別"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "性別通常不影響伺機性感染的發生 [cite: 59]"
    },
    {
        id: "999-national-60",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "抗黴菌藥物 terbinafine 之作用機轉為抑制下列何者之生成？",
        options: [
            "(A) 蛋白質",
            "(B) 核酸",
            "(C) 麥角固醇（ergosterol）",
            "(D) β-聚葡萄糖（β-glucan）"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "Terbinafine 抑制 Squalene epoxidase，阻斷麥角固醇合成路徑 [cite: 60]"
    },
    {
        id: "999-national-61",
        relatedPathogen: "hhv6",
        type: "clinical",
        question: "嬰兒玫瑰疹（roseola infantum）在發疹前會突然高燒，由何種病毒造成？",
        options: [
            "(A) Parvovirus B19",
            "(B) Human herpesvirus-6",
            "(C) Rubella virus",
            "(D) Varicella-zoster virus"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "HHV-6 造成嬰兒玫瑰疹，典型症狀為燒退才出疹 [cite: 61]"
    },
    {
        id: "999-national-62",
        relatedPathogen: "jev",
        type: "virology",
        question: "下列病毒與其自然宿主之配對，何者錯誤？",
        options: [
            "(A) 黃熱病病毒與鳥類",
            "(B) 登革熱病毒與人類、猴子",
            "(C) 日本腦炎病毒與鳥類、豬",
            "(D) 聖路易斯腦炎病毒與鳥類"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "註：講義答案給 C，但 A 選項中黃熱病宿主主要為靈長類亦有爭議 [cite: 62, 63]"
    },
    {
        id: "999-national-63",
        relatedPathogen: "rubella_virus",
        type: "virology",
        question: "下列何者為德國麻疹病毒（Rubella virus）的致病機制？",
        options: [
            "(A) 經消化道感染柱狀上皮細胞",
            "(B) 先在呼吸道增殖，再感染網狀內皮系統",
            "(C) 經蚊子叮咬直接產生病毒血症",
            "(D) 先在肌肉增殖，並擴散到中樞神經"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "註：依講義為 D。一般常規知識為 B 路徑 [cite: 64]"
    },
    {
        id: "999-national-64",
        relatedPathogen: "hbv",
        type: "basic",
        question: "醫院臨床工作者預防 B 型肝炎病毒感染的常用方法？",
        options: [
            "(A) 施打 B 型肝炎疫苗",
            "(B) 注射干擾素",
            "(C) 注射 B 型肝炎免疫球蛋白",
            "(D) 主動感染 B 型肝炎病毒"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "註：常規應為疫苗 A，但講義標示 B (可能指暴露後治療) [cite: 65]"
    },
    {
        id: "999-national-65",
        relatedPathogen: "candida_glabrata",
        type: "mycology",
        question: "下列何種黴菌主要感染途徑不是吸入感染？",
        options: [
            "(A) Coccidioides immitis",
            "(B) Candida glabrata",
            "(C) Histoplasma capsulatum",
            "(D) Blastomyces dermatitidis"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "Candida 多為內源性或接觸感染 [cite: 66]"
    },
    {
        id: "999-national-66",
        relatedPathogen: "histoplasma_capsulatum",
        type: "mycology",
        question: "關節孢子（arthroconidia）是下列何種黴菌之鑑定特徵？",
        options: [
            "(A) Coccidioides immitis",
            "(B) Fusarium solani",
            "(C) Histoplasma capsulatum",
            "(D) Malassezia furfur"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "註：常規球黴菌為 A，講義標示 C [cite: 67]"
    },
    {
        id: "999-national-67",
        relatedPathogen: "measles_virus",
        type: "clinical",
        question: "何種病毒感染有機會經多年後復發引起亞急性硬化全腦炎 (SSPE)？",
        options: [
            "(A) 麻疹病毒 (Measles virus)",
            "(B) 腮腺炎病毒",
            "(C) 立百病毒",
            "(D) 亨得拉病毒"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "重複重點：SSPE 是麻疹病毒感染後的罕見遠期併發症 [cite: 68]"
    },
    {
        id: "999-national-68",
        relatedPathogen: "hepatitis_virus",
        type: "virology",
        question: "關於肝炎病毒之敘述，下列何者錯誤？",
        options: [
            "(A) A 型和 E 型傳染途徑為糞口傳染",
            "(B) A、C、D、E 核酸均為 RNA，B 型為部分雙股 DNA",
            "(C) B 和 C 型可導致慢性肝炎",
            "(D) D 型肝炎需 A 型之幫助來傳染和複製"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "HDV 是缺陷病毒，需要 HBV 提供外套膜 (HBsAg) [cite: 69]"
    },
    {
        id: "999-national-69",
        relatedPathogen: "mycetoma",
        type: "mycology",
        question: "關於 subcutaneous mycoses 及其致病原之關聯，下列何者正確？",
        options: [
            "(A) Sporotrichosis- Chaetomium spp.",
            "(B) Chromoblastomycosis- Madurella spp.",
            "(C) Eumycotic mycetoma- Aspergillus nidulans",
            "(D) Subcutaneous zygomycosis- Sporothrix schenckii"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "真菌性足菌腫 (Eumycotic mycetoma) 可由 A. nidulans 引起 [cite: 70, 71]"
    },
    {
        id: "999-national-70",
        relatedPathogen: "dengue_virus",
        type: "clinical",
        question: "欲由登革熱患者身上分離病毒時，取患者下列那種檢體最適合？",
        options: [
            "(A) 喉頭拭子",
            "(B) 血液",
            "(C) 皮膚",
            "(D) 肛門拭子"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "登革熱主要引起病毒血症，血液檢體分離率最高 [cite: 72]"
    },
    {
        id: "999-national-71",
        relatedPathogen: "coccidioidomycosis",
        type: "mycology",
        question: "病理組織觀察到 3~6 μm 大小之桶狀關節孢子（barrel-shaped arthroconidia），可能罹患：",
        options: [
            "(A) 芽生黴菌症",
            "(B) 球黴菌症 (Coccidioidomycosis)",
            "(C) 莢膜組織胞漿菌症",
            "(D) 副球黴菌症"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "Coccidioides immitis 的典型特徵為桶狀關節孢子 [cite: 73]"
    },
    {
        id: "999-national-72",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "關於抗黴菌（antifungal）藥物之主要作用機制的敘述，下列何者正確？",
        options: [
            "(A) 氟胞嘧啶（Flucytosine）抑制核酸合成",
            "(B) 糞殼菌素（Sordarins）抑制細胞壁合成",
            "(C) 華光黴素（Nikkomycin）抑制細胞膜合成",
            "(D) 聚乙烯（Polyenes）抑制蛋白質合成"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "Nikkomycin 抑制幾丁質 (Chitin) 合成；Polyene 破壞細胞膜 [cite: 74]"
    },
    {
        id: "999-national-73",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "透明黴菌（hyaline molds）是指在病灶組織中具有哪種性質？",
        options: [
            "(A) 產生有分隔之菌絲",
            "(B) 產生無分枝之菌絲",
            "(C) 與青黴菌屬形態相似",
            "(D) 產生具色素之菌絲"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "Hyaline 指透明、無色，且具備橫隔 (Septate) [cite: 75]"
    },
    {
        id: "999-national-74",
        relatedPathogen: "sporothrix_schenckii",
        type: "mycology",
        question: "下列何者為皮下真菌病（subcutaneous mycosis）中具兩型性（dimorphic）之病原？",
        options: [
            "(A) 疣狀毛癬菌",
            "(B) 申克孢子絲菌 (Sporothrix schenckii)",
            "(C) 副冠耳黴",
            "(D) 蛙糞黴"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "Sporothrix 為典型的兩型性皮下真菌 [cite: 76]"
    },
    {
        id: "999-national-75",
        relatedPathogen: "hantaan_virus",
        type: "virology",
        question: "布尼亞病毒（Bunyaviruses）大多藉由節肢動物傳播，何者例外？",
        options: [
            "(A) 漢坦病毒（Hantaan virus）",
            "(B) 裂谷熱病毒",
            "(C) 加利福尼亞腦炎病毒",
            "(D) 克里米亞-剛果出血熱病毒"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "Hantavirus 由齧齒動物（如老鼠）尿液糞便傳播，非節肢動物 [cite: 77]"
    },
    {
        id: "999-national-76",
        relatedPathogen: "aspergillus",
        type: "mycology",
        question: "下列何者為麴菌（Aspergillus spp.）之形態特徵？",
        options: [
            "(A) 具假根 (rhizoid)",
            "(B) 具厚壁孢子",
            "(C) 菌絲無分隔",
            "(D) 具瓶狀 (flask-shaped) 孢子梗 (phialides)"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "麴菌的分生孢子頭 (Conidial head) 具有瓶狀小梗 [cite: 78]"
    },
    {
        id: "999-national-77",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "抗真菌藥物在合成葡聚醣（glucan）相關基因上產生突變而具抗藥性的是？",
        options: [
            "(A) 氟胞嘧啶",
            "(B) 棘白素類（Echinocandins）",
            "(C) 丙烯胺類",
            "(D) 兩性黴素 B"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "Echinocandins (如 Caspofungin) 抑制 1,3-β-glucan 合成 [cite: 79]"
    },
    {
        id: "999-national-78",
        relatedPathogen: "lassa_virus",
        type: "virology",
        question: "下列何種病毒有兩條單股 RNA 基因體，其中一條為雙義（ambisense）RNA？",
        options: [
            "(A) 拉薩病毒（Lassa virus）",
            "(B) 登革病毒",
            "(C) 中東呼吸症候群冠狀病毒",
            "(D) 克里米亞-剛果出血熱病毒"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "沙狀病毒 (Arenaviruses) 具兩段環狀 RNA，且帶有雙義性 [cite: 80]"
    },
    {
        id: "999-national-79",
        relatedPathogen: "talaromyces_marneffei",
        type: "mycology",
        question: "有關馬爾尼菲青黴菌（Talaromyces marneffei）之敘述何者正確？",
        options: [
            "(A) 37°C 呈絲狀菌形態",
            "(B) 具關節孢子",
            "(C) 不會呈現類酵母菌型態",
            "(D) 主要感染途徑為呼吸道"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "兩型性真菌在 37°C 為酵母狀；主要吸入感染 [cite: 81]"
    },
    {
        id: "999-national-80",
        relatedPathogen: "histoplasma_capsulatum",
        type: "mycology",
        question: "培養莢膜組織胞漿菌（Histoplasma capsulatum）時加入何者可防止汙染？",
        options: [
            "(A) 環絲胺酸",
            "(B) 放線菌酮 (Cycloheximide)",
            "(C) 氯法齊明",
            "(D) 奎奴普丁"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "Cycloheximide 可抑制伺機性真菌生長 [cite: 82]"
    },
    {
        id: "999-national-81",
        relatedPathogen: "hbv",
        type: "virology",
        question: "下列那一種病毒會以反轉錄酶（reverse transcriptase）複製病毒基因體？",
        options: [
            "(A) 乳突瘤病毒",
            "(B) 西尼羅河病毒",
            "(C) B 型肝炎病毒 (HBV)",
            "(D) 呼吸道細胞融合病毒"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "HBV 為 Hepadnavirus，利用 RT 進行 DNA 複製 [cite: 83]"
    },
    {
        id: "999-national-82",
        relatedPathogen: "malassezia_furfur",
        type: "mycology",
        question: "培養糠秕馬拉癬菌（Malassezia furfur）時最常加入何者提高培養率？",
        options: [
            "(A) 澱粉",
            "(B) L-半胱胺酸",
            "(C) 橄欖油 (Olive oil)",
            "(D) N-乙醯葡萄胺糖"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "Malassezia 為嗜脂性真菌 (Lipophilic) [cite: 84]"
    },
    {
        id: "999-national-83",
        relatedPathogen: "candida_glabrata",
        type: "mycology",
        question: "下列那一種真菌（fungi）通常不形成菌絲（hyphae）構造？",
        options: [
            "(A) 熱帶念珠菌",
            "(B) 白色念珠菌",
            "(C) 光滑念珠菌 (Candida glabrata)",
            "(D) 近平滑念珠菌"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "C. glabrata 僅以酵母型存在，不產生假菌絲 [cite: 85]"
    },
    {
        id: "999-national-84",
        relatedPathogen: "retrovirus",
        type: "virology",
        question: "下列何者不屬於反轉錄病毒科（Retrovirus family）？",
        options: [
            "(A) 腫瘤病毒亞科",
            "(B) 環狀病毒亞科 (Orbivirinae)",
            "(C) 慢病毒亞科",
            "(D) 泡沫病毒亞科"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "Orbivirus 屬於 Reoviridae [cite: 86]"
    },
    {
        id: "999-national-85",
        relatedPathogen: "prion",
        type: "basic",
        question: "下列何項最不能去除普里昂（prion）之感染能力？",
        options: [
            "(A) 高壓滅菌 121℃ 1 小時",
            "(B) 浸泡於 5% 次氯酸溶液",
            "(C) 浸泡於 1 M NaOH 溶液",
            "(D) 紫外線消毒"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "Prion 不含核酸，對紫外線照射不敏感 [cite: 87]"
    },
    {
        id: "999-national-86",
        relatedPathogen: "hpv",
        type: "virology",
        question: "關於人類乳突瘤病毒（HPV）的敘述何者錯誤？",
        options: [
            "(A) 可感染皮膚及黏膜",
            "(B) 沒有外套膜",
            "(C) 其 E1A 與 E1B 蛋白質可以活化致癌基因",
            "(D) HPV-16 和 HPV-18 與癌症有關"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "HPV 的致癌蛋白是 E6 (接 p53) 與 E7 (接 pRb) [cite: 88]"
    },
    {
        id: "999-national-87",
        relatedPathogen: "hepatitis_virus",
        type: "virology",
        question: "關於肝炎病毒之敘述何者錯誤？",
        options: [
            "(A) HAV 與 HCV 皆為正股 RNA 病毒",
            "(B) HBV 與 HCV 皆有外套膜",
            "(C) HAV 與 E 型肝炎病毒常透過血液傳染",
            "(D) B 型肝炎病毒在細胞核內複製"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "HAV 與 HEV 主要傳染途徑為糞口 (Fecal-oral) [cite: 89]"
    },
    {
        id: "999-national-88",
        relatedPathogen: "hiv",
        type: "virology",
        question: "人類免疫缺陷病毒（HIV）之套膜蛋白質（envelope protein）為何？",
        options: [
            "(A) gp120",
            "(B) gp21",
            "(C) p66",
            "(D) p55"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "gp120 負責與 CD4 受體結合 [cite: 90]"
    },
    {
        id: "999-national-89",
        relatedPathogen: "dermatophytes",
        type: "mycology",
        question: "關於致病性皮癬菌（Dermatophytes）之敘述正確者？",
        options: [
            "(A) 不會人傳人",
            "(B) 表皮癬菌屬（Epidermophyton）不產生小分生孢子",
            "(C) 小孢癬菌屬（Microsporum）極少產生大分生孢子",
            "(D) 毛癬菌屬（Trichophyton）產生大量大分生孢子"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "Epidermophyton 僅產生棒狀大分生孢子，不具小分生孢子 [cite: 91]"
    },
    {
        id: "999-national-90",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "多烯類（polyenes）藥物抑制真菌之主要機轉？",
        options: [
            "(A) 與麥角固醇結合，破壞細胞膜",
            "(B) 抑制 14-α-脫甲基酶",
            "(C) 抑制鯊烯環氧酶",
            "(D) 抑制 1,3-β-葡聚醣之合成"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "與第 11 題重複重點：Polyenes (如 AmB) 直接破壞細胞膜 [cite: 92]"
    },
    {
        id: "999-national-91",
        relatedPathogen: "fungi_general",
        type: "mycology",
        question: "真菌菌絲（hyphae）之兩種基本形態為何？",
        options: [
            "(A) 隔菌絲 (septate hyphae) 和多核體菌絲 (coenocytic hyphae)",
            "(B) 隔菌絲和發芽管",
            "(C) 假菌絲和多核體菌絲",
            "(D) 假菌絲和鎖狀連接菌絲"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "真菌基本形態為有隔膜與無隔膜 (多核體) [cite: 93]"
    },
    {
        id: "999-national-92",
        relatedPathogen: "hiv",
        type: "virology",
        question: "何種病毒感染後會引發細胞融合（syncytia）並形成巨大細胞？",
        options: [
            "(A) 腸病毒",
            "(B) 登革病毒",
            "(C) 人類免疫缺失病毒 (HIV)",
            "(D) 狂犬病病毒"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "HIV 可透過套膜蛋白與 CD4 細胞交互作用形成多核巨大細胞 [cite: 94]"
    },
    {
        id: "999-national-93",
        relatedPathogen: "rubella_virus",
        type: "clinical",
        question: "下列何種病毒感染最容易引起嬰兒先天性白內障（congenital cataract）？",
        options: [
            "(A) 單純疱疹病毒",
            "(B) 腸病毒",
            "(C) 腺病毒",
            "(D) 德國麻疹病毒 (Rubella virus)"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "CRS 典型三大症狀：心臟畸形、耳聾、白內障 [cite: 95]"
    },
    {
        id: "999-national-94",
        relatedPathogen: "virology_general",
        type: "clinical",
        question: "下列那幾種病毒最可能經由性行為感染？①HAV ②HSV ③Zika virus ④Measles virus",
        options: [
            "(A) ①②",
            "(B) ②③",
            "(C) ③④",
            "(D) ①③"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "HSV 與 Zika 皆可透過性行為傳播 [cite: 96]"
    },
    {
        id: "999-national-95",
        relatedPathogen: "hiv",
        type: "clinical",
        question: "目前對愛滋病的治療用藥不包含下列何種？",
        options: [
            "(A) Reverse transcriptase inhibitor",
            "(B) Protease inhibitor",
            "(C) Integrase inhibitor",
            "(D) Neuraminidase inhibitor"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "Neuraminidase inhibitor (如奧司他韋) 用於治療流感 [cite: 97]"
    },
    {
        id: "999-national-96",
        relatedPathogen: "paramyxovirus",
        type: "virology",
        question: "下列有關副黏液病毒（paramyxovirus）的敘述何者最適當？",
        options: [
            "(A) 基因體即是 mRNA",
            "(B) 病毒顆粒中並未包裹 RNA 聚合酶",
            "(C) 病毒感染後引發細胞融合 (syncytium)",
            "(D) 病毒蛋白產量是一致的"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "與第 39 題呼應：Paramyxo 具 F protein 造成細胞融合 [cite: 98]"
    },
    {
        id: "999-national-97",
        relatedPathogen: "picornaviridae",
        type: "virology",
        question: "下列何種病毒不屬於小 RNA 病毒科（Picornaviridae）？",
        options: [
            "(A) A 型肝炎病毒",
            "(B) 腸病毒",
            "(C) 鼻病毒",
            "(D) 冠狀病毒 (Coronavirus)"
        ],
        correctAnswer: "D",
        [cite_start]userNote: "Coronavirus 屬於 Coronaviridae [cite: 99]"
    },
    {
        id: "999-national-98",
        relatedPathogen: "filovirus",
        type: "virology",
        question: "下列有關絲狀病毒（filovirus）的敘述何者正確？",
        options: [
            "(A) 病毒可經由蝙蝠及猴子感染人，也可人傳人",
            "(B) 2018 年伊波拉大流行發生在海地",
            "(C) 病毒基因為正股 RNA",
            "(D) 伊波拉病毒顆粒是子彈型"
        ],
        correctAnswer: "A",
        [cite_start]userNote: "伊波拉病毒為 (-)ssRNA，形狀為長絲狀 [cite: 100]"
    },
    {
        id: "999-national-99",
        relatedPathogen: "virology_immunity",
        type: "basic",
        question: "哪項因子最有可能造成第四型過敏及發炎反應？",
        options: [
            "(A) 病毒抗體",
            "(B) 干擾素",
            "(C) 多形核白血球 (PMN)",
            "(D) 細胞激素"
        ],
        correctAnswer: "C",
        [cite_start]userNote: "註：依講義給 C。一般第四型應與 T 細胞、巨噬細胞較有關 [cite: 101]"
    },
    {
        id: "999-national-100",
        relatedPathogen: "hiv",
        type: "virology",
        question: "下列何種細胞不是愛滋病毒（HIV）主要感染的對象？",
        options: [
            "(A) CD4 T 細胞",
            "(B) 嗜中性白血球 (neutrophil)",
            "(C) 巨噬細胞",
            "(D) 樹突細胞"
        ],
        correctAnswer: "B",
        [cite_start]userNote: "HIV 感染帶有 CD4 與 CCR5/CXCR4 的細胞 [cite: 102]"
    },
    {
        id: "999-national-101",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "新型抗流感病毒藥物紓伏效（baloxavir marboxil）抑制對象為何？",
        options: [
            "(A) PB2",
            "(B) M2",
            "(C) HA",
            "(D) NA"
        ],
        correctAnswer: "A",
        userNote: "Baloxavir 抑制 Cap-snatching 過程中的內切酶 [cite: 103]"
    },
    {
        id: "999-national-102",
        relatedPathogen: "herpesvirus",
        type: "clinical",
        question: "有關疱疹病毒（Herpesvirus）與其相關疾病之配對，下列何者錯誤？",
        options: [
            "(A) HSV-1：疱疹性腦炎",
            "(B) EB 病毒：單核球增多症",
            "(C) 水痘病毒（VZV）：帶狀疱疹",
            "(D) 人類疱疹病毒六型（HHV-6）：疱疹性咽峽炎"
        ],
        correctAnswer: "D",
        userNote: "疱疹性咽峽炎 (Herpangina) 多由 Coxsackievirus A 引起 [cite: 104]"
    },
    {
        id: "999-national-103",
        relatedPathogen: "ebola_virus",
        type: "virology",
        question: "有關伊波拉病毒（Ebola virus）的敘述，下列何者錯誤？",
        options: [
            "(A) 病毒穩定，主要透過腸胃道傳染",
            "(B) 感染內皮細胞、單核球等造成細胞壞死",
            "(C) 會引起細胞激素風暴 (cytokine storm)",
            "(D) 導致血管通透性增加，造成內出血"
        ],
        correctAnswer: "A",
        userNote: "主要透過接觸受感染者的血液或體液傳播 [cite: 105]"
    },
    {
        id: "999-national-104",
        relatedPathogen: "dengue_virus",
        type: "virology",
        question: "有關登革病毒（dengue virus）的敘述，下列何者正確？",
        options: [
            "(A) 無法以乙醚去其活性",
            "(B) 與 C 型肝炎病毒同屬於黃病毒科（Flaviviridae）",
            "(C) 可以血球凝集抑制實驗區分四種型別",
            "(D) 臨床已有抗登革熱藥物"
        ],
        correctAnswer: "B",
        userNote: "Dengue 與 HCV 皆屬 Flaviviridae [cite: 106]"
    },
    {
        id: "999-national-105",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "下列何種藥物的作用機轉為阻斷真菌微小管（microtubule）？",
        options: [
            "(A) itraconazole",
            "(B) griseofulvin",
            "(C) nystatin",
            "(D) terbinafine"
        ],
        correctAnswer: "B",
        userNote: "Griseofulvin 抑制有絲分裂的微小管功能 [cite: 107]"
    },
    {
        id: "999-national-106",
        relatedPathogen: "cryptococcus_neoformans",
        type: "mycology",
        question: "新型隱球菌在何種培養基菌落呈咖啡色？",
        options: [
            "(A) BCYE agar",
            "(B) CHROMagar",
            "(C) cornmeal agar",
            "(D) niger seed agar"
        ],
        correctAnswer: "D",
        userNote: "Niger seed agar (鳥糞石培養基) 偵測 Phenoloxidase 活性 [cite: 108]"
    },
    {
        id: "999-national-107",
        relatedPathogen: "sars_cov_2",
        type: "virology",
        question: "下列有關病毒的敘述，何者正確？",
        options: [
            "(A) HIV 之酵素均由宿主基因轉譯",
            "(B) 茲卡病毒為負股 RNA 病毒",
            "(C) 新型冠狀病毒（SARS-CoV-2）之複製在細胞質中進行",
            "(D) 腸病毒具有外套膜"
        ],
        correctAnswer: "C",
        userNote: "SARS-CoV-2 為 (+)ssRNA，在細胞質複製 [cite: 109]"
    },
    {
        id: "999-national-108",
        relatedPathogen: "virology_general",
        type: "virology",
        question: "下列那幾種病毒可經由動物暨節肢動物而傳播？①漢他病毒 ②日本腦炎病毒 ③黃熱病病毒 ④狂犬病病毒",
        options: [
            "(A) ①②",
            "(B) ②③",
            "(C) ③④",
            "(D) ②④"
        ],
        correctAnswer: "B",
        userNote: "JEV (蚊) 與 Yellow fever (蚊) 為節肢動物媒介 [cite: 110]"
    },
    {
        id: "999-national-109",
        relatedPathogen: "bunyavirus_arenavirus",
        type: "virology",
        question: "下列何者不是 Bunyavirus 與 Arenavirus 共同具有的特性？",
        options: [
            "(A) 為人畜共同傳染的病毒",
            "(B) 基因體為片段 RNA 組成",
            "(C) 可能造成出血熱",
            "(D) 病毒顆粒中都沒有包裹核糖體"
        ],
        correctAnswer: "D",
        userNote: "Arenavirus 顆粒中含有宿主的核糖體 (Sandy appearance) [cite: 111, 119]"
    },
    {
        id: "999-national-110",
        relatedPathogen: "dengue_virus",
        type: "virology",
        question: "下列何者不是負股 RNA 病毒（negative-sense RNA virus）？",
        options: [
            "(A) 流感病毒",
            "(B) 伊波拉病毒",
            "(C) 狂犬病毒",
            "(D) 登革熱病毒"
        ],
        correctAnswer: "D",
        userNote: "登革熱病毒為正股 (+)ssRNA [cite: 112]"
    },
    {
        id: "999-national-111",
        relatedPathogen: "herpes_simplex_virus",
        type: "clinical",
        question: "下列疾病何者不是由痘科病毒（Poxvirus）引起？",
        options: [
            "(A) 天花",
            "(B) 傳染性軟疣",
            "(C) 手指頭上的 Orf 病灶",
            "(D) 疱疹性膿性指頭疽（whitlow）"
        ],
        correctAnswer: "D",
        userNote: "Herpetic whitlow 由 HSV 引起 [cite: 113]"
    },
    {
        id: "999-national-112",
        relatedPathogen: "hcv",
        type: "virology",
        question: "下列那一種藥物，主要抑制 C 型肝炎病毒的聚合酶（polymerase）？",
        options: [
            "(A) 索華迪（sofosbuvir）",
            "(B) 波普瑞韋（boceprevir）",
            "(C) 拉米夫定（lamivudine）",
            "(D) 聚乙二醇干擾素"
        ],
        correctAnswer: "A",
        userNote: "Sofosbuvir 是 NS5B 聚合酶抑制劑 [cite: 114]"
    },
    {
        id: "999-national-113",
        relatedPathogen: "microbiology_id",
        type: "basic",
        question: "MALDI-TOF MS 廣泛應用在微生物鑑定上，其主要偵測標的物為何？",
        options: [
            "(A) 蛋白質",
            "(B) 核酸",
            "(C) 粒線體",
            "(D) 微量元素"
        ],
        correctAnswer: "A",
        userNote: "偵測細菌/真菌之蛋白質譜圖以鑑定種類 [cite: 115]"
    },
    {
        id: "999-national-114",
        relatedPathogen: "rhizopus",
        type: "mycology",
        question: "下列何者具有寬大菌絲，且沒有或較少細胞中隔（septum）？",
        options: [
            "(A) Fusarium spp.",
            "(B) Trichosporon spp.",
            "(C) Rhizopus spp.",
            "(D) Scedosporium spp."
        ],
        correctAnswer: "C",
        userNote: "接合菌門 (Zygomycetes) 特徵：寬大無隔膜菌絲 [cite: 116, 117]"
    },
    {
        id: "999-national-115",
        relatedPathogen: "hcv",
        type: "virology",
        question: "抗 C 肝藥物雷巴威林（Ribavirin）是抑制病毒複製的那一項步驟？",
        options: [
            "(A) 接觸",
            "(B) 穿過細胞膜及解散外殼",
            "(C) 病毒 RNA 的生合成",
            "(D) 蛋白質合成"
        ],
        correctAnswer: "C",
        userNote: "Ribavirin 是鳥苷類似物，干擾 RNA 聚合酶 [cite: 118]"
    },
    {
        id: "999-national-116",
        relatedPathogen: "arenavirus",
        type: "virology",
        question: "下列有關沙狀病毒（arenavirus）的敘述何者最不適當？",
        options: [
            "(A) 病毒顆粒中含核糖體",
            "(B) 病毒經由蚊子傳播",
            "(C) 病毒可經由空氣傳播",
            "(D) 感染會造成腦膜炎及出血性症狀"
        ],
        correctAnswer: "B",
        userNote: "重複重點：沙狀病毒是由齧齒動物媒介 [cite: 119]"
    },
    {
        id: "999-national-117",
        relatedPathogen: "hbv",
        type: "basic",
        question: "如何區分「疫苗接種者」與「自然感染康復者」？",
        options: [
            "(A) Anti-HBc 抗體陽性",
            "(B) Anti-HBs 抗體陽性",
            "(C) HBs 抗原陰性",
            "(D) HBe 抗原陰性"
        ],
        correctAnswer: "A",
        userNote: "Anti-HBc (+) 代表曾受自然感染 (含有核心抗體) [cite: 120]"
    },
    {
        id: "999-national-118",
        relatedPathogen: "parvovirus_b19",
        type: "virology",
        question: "下列何者不屬於小 RNA 病毒科（Picornaviridae）？",
        options: [
            "(A) Poliovirus",
            "(B) B19 virus",
            "(C) Hepatitis A virus",
            "(D) Rhinovirus"
        ],
        correctAnswer: "B",
        userNote: "B19 屬於 Parvoviridae (DNA 病毒) [cite: 121]"
    },
    {
        id: "999-national-119",
        relatedPathogen: "dengue_virus",
        type: "virology",
        question: "有關登革熱病毒的敘述，下列何者最不適當？",
        options: [
            "(A) 是一個 arbovirus",
            "(B) 與茲卡病毒屬相同病毒科",
            "(C) 患者將獲終身免疫",
            "(D) 可能引起出血熱"
        ],
        correctAnswer: "C",
        userNote: "有四種血清型，感染其中一型僅具該型終身免疫，對他型不具備 [cite: 122]"
    },
    {
        id: "999-national-120",
        relatedPathogen: "hdv",
        type: "virology",
        question: "有關人類 D 型肝炎病毒的敘述，下列何者正確？",
        options: [
            "(A) 主要藉由糞口傳染",
            "(B) 可藉由施打 B 型肝炎疫苗來預防感染",
            "(C) HDV 感染會促進 HBsAg 抗體陽轉",
            "(D) 需要 HBV 的 HBc 蛋白才能產生顆粒"
        ],
        correctAnswer: "B",
        userNote: "沒 HBV 就沒 HDV，所以防 HBV 就能防 HDV [cite: 123]"
    },
    {
        id: "999-national-121",
        relatedPathogen: "aspergillus",
        type: "mycology",
        question: "麴菌 CYP51A 基因突變是產生下列何種藥物抗藥性的主因？",
        options: [
            "(A) 三唑 (triazole)",
            "(B) 棘白菌素",
            "(C) 多烯",
            "(D) 烯丙胺"
        ],
        correctAnswer: "A",
        userNote: "CYP51 突變會改變 Azole 類的接合位點 [cite: 124]"
    },
    {
        id: "999-national-122",
        relatedPathogen: "talaromyces_marneffei",
        type: "mycology",
        question: "HIV 患者血培：25℃ 絲狀且生鮮紅色色素，35℃ 為酵母狀，最可能是：",
        options: [
            "(A) Emergomyces pasteurianus",
            "(B) Scedosporium apiospermum",
            "(C) Paracoccidioides brasiliensis",
            "(D) Talaromyces marneffei"
        ],
        correctAnswer: "D",
        userNote: "關鍵字：紅色素、兩型性、HIV [cite: 125]"
    },
    {
        id: "999-national-123",
        relatedPathogen: "virology_general",
        type: "virology",
        question: "下列有關病毒的敘述，何者最適當？",
        options: [
            "(A) RNA 病毒複製時錯誤率大於 DNA 病毒",
            "(B) 病毒複製以等比級數增加",
            "(C) 流感病毒耐受性比腸病毒強",
            "(D) 所有 RNA 病毒均在細胞質中完成複製"
        ],
        correctAnswer: "A",
        userNote: "RNA 聚合酶缺乏校對 (Proofreading) 功能 [cite: 126]"
    },
    {
        id: "999-national-124",
        relatedPathogen: "virology_immunity",
        type: "basic",
        question: "下列那一個最有可能是引發「全身性類感冒症狀」之因子？",
        options: [
            "(A) T 細胞",
            "(B) 干擾素 (Interferon)",
            "(C) 抗體",
            "(D) 免疫複合物"
        ],
        correctAnswer: "B",
        userNote: "Interferon (IFN-α/β) 常引起發燒、疲倦等症狀 [cite: 127]"
    },
    {
        id: "999-national-125",
        relatedPathogen: "bunyaviridae",
        type: "virology",
        question: "下列有關布尼亞科（bunyaviridae）病毒的敘述，何者最適當？",
        options: [
            "(A) 為正股 (+)RNA 病毒",
            "(B) 在細胞核中複製",
            "(C) 漢他病毒主要以老鼠為媒介傳播",
            "(D) 以人傳人方式傳播"
        ],
        correctAnswer: "C",
        userNote: "Bunyaviridae 為負股 RNA 病毒 [cite: 128]"
    },
    {
        id: "999-national-126",
        relatedPathogen: "eb_virus",
        type: "clinical",
        question: "下列疾病與 EB 病毒（Epstein-Barr virus）感染較無關？",
        options: [
            "(A) 愛滋病患口腔毛狀白斑",
            "(B) 新生兒先天性聽力受損",
            "(C) 鼻咽癌",
            "(D) 單核球增多症"
        ],
        correctAnswer: "B",
        userNote: "先天聽損主要與 CMV (巨細胞病毒) 感染有關 [cite: 129]"
    },
    {
        id: "999-national-127",
        relatedPathogen: "retrovirus",
        type: "virology",
        question: "有關反轉錄病毒（retrovirus）的敘述，何者最不適當？",
        options: [
            "(A) 原病毒 (provirus) 只出現在宿主染色體固定位置",
            "(B) 利用宿主的 tRNA 為引子",
            "(C) 病毒顆粒中有兩套單股 RNA",
            "(D) 帶有反轉錄病毒酶"
        ],
        correctAnswer: "A",
        userNote: "整合 (Integration) 位置通常是隨機的 [cite: 130]"
    },
    {
        id: "999-national-128",
        relatedPathogen: "sars_cov_2",
        type: "virology",
        question: "SARS-CoV2 最初如何被鑑定出與蝙蝠冠狀病毒相近？",
        options: [
            "(A) 電子顯微鏡",
            "(B) 病毒序列與蝙蝠冠狀病毒序列極高相似度",
            "(C) 臨床症狀",
            "(D) 抗體交叉反應"
        ],
        correctAnswer: "B",
        userNote: "透過基因體定序分析完成 [cite: 131]"
    },
    {
        id: "999-national-129",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "下列抗黴菌藥物中，何者作用部位與其他三者不同？",
        options: [
            "(A) 三唑 (triazole)",
            "(B) 棘白菌素 (echinocandin)",
            "(C) 烯丙胺 (allylamine)",
            "(D) 多烯 (polyenes)"
        ],
        correctAnswer: "B",
        userNote: "Echinocandins 作用於細胞壁，其餘作用於細胞膜 [cite: 132]"
    },
    {
        id: "999-national-130",
        relatedPathogen: "rhodotorula",
        type: "mycology",
        question: "下列何者會合成類胡蘿蔔素，使菌落呈粉紅至紅色？",
        options: [
            "(A) Trichosporon spp.",
            "(B) Rhodotorula spp.",
            "(C) Cryptococcus spp.",
            "(D) Malassezia spp."
        ],
        correctAnswer: "B",
        userNote: "紅酵母屬 (Rhodotorula) 是典型的產色素酵母 [cite: 133, 134]"
    },
    {
        id: "999-national-131",
        relatedPathogen: "prion",
        type: "basic",
        question: "有關普里昂（prion）的敘述，何者最不適當？",
        options: [
            "(A) 只能在腦部測到其存在",
            "(B) 抗病毒化學及物理方法無法抑制其活性",
            "(C) 會產生海綿狀腦病變",
            "(D) 以蛋白質形式進行感染"
        ],
        correctAnswer: "A",
        userNote: "淋巴組織如扁桃腺也可能測得 [cite: 135]"
    },
    {
        id: "999-national-132",
        relatedPathogen: "parvovirus_b19",
        type: "clinical",
        question: "有關 parvovirus B19 的敘述，下列何者最適當？",
        options: [
            "(A) 為雙股 DNA 病毒",
            "(B) 糞口傳染",
            "(C) 引起紅血球先驅細胞溶解",
            "(D) 造成嬰兒玫瑰疹"
        ],
        correctAnswer: "C",
        userNote: "Parvovirus B19 專一感染紅血球母細胞 [cite: 136]"
    },
    {
        id: "999-national-133",
        relatedPathogen: "prion",
        type: "basic",
        question: "RT-QuIC 快速檢驗是利用 prion 的何種特性？",
        options: [
            "(A) PrPC 會聚集成纖絲",
            "(B) PrPSC 會聚集成纖絲",
            "(C) PrPC 會將 PrPSC 轉換成 PrPC",
            "(D) PrPSC 半衰期較短"
        ],
        correctAnswer: "B",
        userNote: "PrPSC (致病型) 會誘導聚集形成澱粉樣纖維 [cite: 137]"
    },
    {
        id: "999-national-134",
        relatedPathogen: "poxvirus",
        type: "virology",
        question: "痘病毒（poxvirus）與大多數人類 DNA 病毒之差異為：",
        options: [
            "(A) 在細胞質複製",
            "(B) 基因體為線型雙股 DNA",
            "(C) 有自己的 DNA 聚合酶",
            "(D) 利用 strand-displacement"
        ],
        correctAnswer: "A",
        userNote: "Poxvirus 帶有完整酵素系統，可在胞質獨立複製 [cite: 138]"
    },
    {
        id: "999-national-135",
        relatedPathogen: "anti_viral_drugs",
        type: "clinical",
        question: "有關病毒感染治療藥物之敘述，何者最不適當？",
        options: [
            "(A) 茚地那韋（indinavir）常用來治療 HSV 感染",
            "(B) 利巴韋林合併干擾素可用於治療 C 肝",
            "(C) 狂犬病需施打抗體及疫苗",
            "(D) 金剛烷胺可抑制流感 A 型"
        ],
        correctAnswer: "A",
        userNote: "Indinavir 是 HIV 蛋白酶抑制劑，非 HSV 用藥 [cite: 139]"
    },
    {
        id: "999-national-136",
        relatedPathogen: "rotavirus",
        type: "clinical",
        question: "一歲男嬰水瀉嘔吐兩天，最可能感染：",
        options: [
            "(A) 輪狀病毒 (rotavirus)",
            "(B) 流感病毒",
            "(C) B 型肝炎病毒",
            "(D) EB 病毒"
        ],
        correctAnswer: "A",
        userNote: "嬰幼兒病毒性腸胃炎的首要原因 [cite: 140]"
    },
    {
        id: "999-national-137",
        relatedPathogen: "emergomyces",
        type: "mycology",
        question: "關於 Emergomyces 之敘述，下列何者最不適當？",
        options: [
            "(A) 為溫度雙型性真菌",
            "(B) 經由呼吸道感染，常出現皮膚病灶",
            "(C) 多數被感染者都是健康人",
            "(D) 可使用 AmB 和 triazole 治療"
        ],
        correctAnswer: "C",
        userNote: "主要好發於免疫功能低下 (如 AIDS) 的病患 [cite: 141]"
    },
    {
        id: "999-national-138",
        relatedPathogen: "antifungal_drugs",
        type: "mycology",
        question: "棘白菌素（Echinocandin）對下列何種真菌治療效果最好？",
        options: [
            "(A) 毛黴菌",
            "(B) 隱球菌",
            "(C) 鐮孢菌",
            "(D) 麴菌 (Aspergillus spp.)"
        ],
        correctAnswer: "D",
        userNote: "Echinocandins 對 Aspergillus 與 Candida 有效 [cite: 142]"
    },
    {
        id: "999-national-139",
        relatedPathogen: "virology_general",
        type: "virology",
        question: "病毒感染時最常利用何種蛋白質進入細胞內？",
        options: [
            "(A) 基質蛋白",
            "(B) 蛋白水解酶",
            "(C) 醣蛋白 (glycoprotein)",
            "(D) 核心蛋白"
        ],
        correctAnswer: "C",
        userNote: "套膜病毒表面的醣蛋白負責識別受體 [cite: 143]"
    },
    {
        id: "999-national-140",
        relatedPathogen: "hiv",
        type: "virology",
        question: "何種病毒比較不會直接造成細胞增生形成腫瘤？",
        options: [
            "(A) HBV",
            "(B) HTLV-1",
            "(C) HPV",
            "(D) HIV"
        ],
        correctAnswer: "D",
        userNote: "HIV 引起腫瘤多屬間接因素 (免疫抑制) [cite: 144]"
    },
    {
        id: "999-national-141",
        relatedPathogen: "norovirus",
        type: "clinical",
        question: "郵輪上一群人上吐下瀉，2-3 天自癒。病原？",
        options: [
            "(A) 腺病毒 40 型",
            "(B) 諾羅病毒 (Norovirus)",
            "(C) 輪狀病毒",
            "(D) 腸病毒 D68"
        ],
        correctAnswer: "B",
        userNote: "關鍵字：郵輪、集體暴發、自限性 [cite: 145]"
    },
    {
        id: "999-national-142",
        relatedPathogen: "measles_virus",
        type: "clinical",
        question: "下列臨床症狀，何者與麻疹病毒感染較無關？",
        options: [
            "(A) 腦炎",
            "(B) 畏光",
            "(C) 科氏斑點 (Koplik spots)",
            "(D) 進行性多灶性白質腦病 (PML)"
        ],
        correctAnswer: "D",
        userNote: "PML 由 JC 病毒 (Polyomavirus) 引起 [cite: 146]"
    },
    {
        id: "999-national-143",
        relatedPathogen: "mers_cov",
        type: "virology",
        question: "有關人類中東呼吸症候群（MERS）病毒，何者最適當？",
        options: [
            "(A) 產生出血及休克",
            "(B) 遺傳基因為正股 (+)RNA",
            "(C) 以果子狸為中間宿主",
            "(D) 25℃ 複製生長"
        ],
        correctAnswer: "B",
        userNote: "MERS 中間宿主是駱駝 [cite: 147]"
    },
    {
        id: "999-national-144",
        relatedPathogen: "hiv",
        type: "virology",
        question: "有關人類免疫缺陷病毒（HIV）的敘述，何者最不適當？",
        options: [
            "(A) 蛋白酶主要作用於宿主蛋白質",
            "(B) Rev 蛋白質可調控 mRNA 轉送",
            "(C) Tat 為強轉活化因子",
            "(D) 早期會產生多種剪接 mRNA"
        ],
        correctAnswer: "A",
        userNote: "HIV 蛋白酶主要水解病毒本身的 Gag-Pol 前驅蛋白 [cite: 148]"
    },
    {
        id: "999-national-145",
        relatedPathogen: "candida_krusei",
        type: "mycology",
        question: "何種念珠菌對 fluconazole 具有先天的抗藥性？",
        options: [
            "(A) Candida albicans",
            "(B) Candida tropicalis",
            "(C) Candida krusei",
            "(D) Candida parapsilosis"
        ],
        correctAnswer: "C",
        userNote: "C. krusei 對 Fluconazole 為先天性 (Intrinsic) 抗藥 [cite: 149]"
    },
    {
        id: "999-national-146",
        relatedPathogen: "coccidioides_immitis",
        type: "mycology",
        question: "下列何者在感染組織中較常形成酵母團（spherule）？",
        options: [
            "(A) Histoplasma capsulatum",
            "(B) Blastomyces dermatitidis",
            "(C) Paracoccidioides brasiliensis",
            "(D) Coccidioides immitis"
        ],
        correctAnswer: "D",
        userNote: "Spherule 內含 Endospores 是球黴菌的特徵 [cite: 150]"
    },
    {
        id: "999-national-147",
        relatedPathogen: "herpes_simplex_virus",
        type: "virology",
        question: "有關病毒感染細胞之病變機制，何者最適當？",
        options: [
            "(A) HSV 感染細胞核內可見 Cowdry type A 包涵體",
            "(B) 腸病毒會發生細胞融合",
            "(C) 德國麻疹病毒形成 Negri body",
            "(D) 腺病毒透過膜融合入侵"
        ],
        correctAnswer: "A",
        userNote: "Negri body 與 Rabies 有關；腺病毒不具外套膜 [cite: 151]"
    },
    {
        id: "999-national-148",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "金剛烷胺（amantadine）主要抑制複製的何項步驟？",
        options: [
            "(A) 接觸",
            "(B) 進入細胞及解散外殼 (uncoating)",
            "(C) 病毒轉錄",
            "(D) 蛋白質合成"
        ],
        correctAnswer: "B",
        userNote: "抑制 M2 離子通道，防止病毒去殼 [cite: 152, 162]"
    },
    {
        id: "999-national-149",
        relatedPathogen: "hev",
        type: "virology",
        question: "哪個肝炎病毒感染在懷孕婦女致死率高達 20%？",
        options: [
            "(A) HAV",
            "(B) HCV",
            "(C) HDV",
            "(D) HEV"
        ],
        correctAnswer: "D",
        userNote: "重複重點：HEV 對孕婦具高致死率 [cite: 153]"
    },
    {
        id: "999-national-150",
        relatedPathogen: "vzv",
        type: "clinical",
        question: "有關水痘病毒的敘述，下列何者最不適當？",
        options: [
            "(A) 終身只會得到一次帶狀疱疹",
            "(B) 有抗病毒藥物可治療",
            "(C) 有疫苗可預防",
            "(D) 潛伏在神經細胞中"
        ],
        correctAnswer: "A",
        userNote: "雖然少見，但免疫低下時帶狀疱疹仍可能復發 [cite: 154]"
    },
    {
        id: "999-national-151",
        relatedPathogen: "enterovirus",
        type: "virology",
        question: "有關腸病毒（enterovirus）的敘述，何者最不適當？",
        options: [
            "(A) 只在腸胃道細胞複製",
            "(B) 屬於小 RNA 病毒科",
            "(C) 糞口為主要傳染管道",
            "(D) 大部分不會造成重症"
        ],
        correctAnswer: "A",
        userNote: "會經由血行擴散至神經系統或心臟 [cite: 155]"
    },
    {
        id: "999-national-152",
        relatedPathogen: "rabies_virus",
        type: "clinical",
        question: "關於狂犬病病毒（Rabies virus）的敘述，何者最適當？",
        options: [
            "(A) 不會在肌肉細胞複製",
            "(B) 被咬後施打免疫球蛋白配疫苗可有效防止",
            "(C) 基因體為環狀 DNA",
            "(D) 犬類是唯一宿主"
        ],
        correctAnswer: "B",
        userNote: "狂犬病是少數可進行暴露後預防的疾病 [cite: 156]"
    },
    {
        id: "999-national-153",
        relatedPathogen: "candida_albicans",
        type: "mycology",
        question: "下列何種念珠菌芽管測試（germ tube test）為陽性？",
        options: [
            "(A) Candida tropicalis",
            "(B) Candida albicans",
            "(C) Candida parapsilosis",
            "(D) Candida krusei"
        ],
        correctAnswer: "B",
        userNote: "重複重點：C. albicans 鑑定的必考題 [cite: 157]"
    },
    {
        id: "999-national-154",
        relatedPathogen: "ketoconazole",
        type: "mycology",
        question: "何種藥物抑制真菌細胞麥角固醇（ergosterol）的合成？",
        options: [
            "(A) nikkomycin Z",
            "(B) caspofungin",
            "(C) ketoconazole",
            "(D) nystatin"
        ],
        correctAnswer: "C",
        userNote: "重複重點：Azole 抑制合成，Polyene 破壞膜結構 [cite: 158]"
    },
    {
        id: "999-national-155",
        relatedPathogen: "virology_general",
        type: "virology",
        question: "下列有關病毒複製之敘述，何者最不適當？",
        options: [
            "(A) 基因體複製在結構蛋白合成之後才進行",
            "(B) 複製過程中均需合成 RNA",
            "(C) HBV 之外套膜來自寄主膜",
            "(D) 隱蝕期 (eclipse period) 測不到病毒"
        ],
        correctAnswer: "A",
        userNote: "通常早期蛋白 (如聚合酶) 合成後就開始基因體複製 [cite: 159]"
    },
    {
        id: "999-national-156",
        relatedPathogen: "oncogenic_virus",
        type: "virology",
        question: "下列有關致癌性病毒的敘述，何者最適當？",
        options: [
            "(A) SV40 之 T 抗原可與腫瘤抑制蛋白結合",
            "(B) SV40 可在人類形成腫瘤",
            "(C) HPV E7 蛋白與 p53 結合",
            "(D) 腺病毒 E1B 與 p105RB 結合"
        ],
        correctAnswer: "A",
        userNote: "HPV E6 結 p53；E7 結 pRb [cite: 160]"
    },
    {
        id: "999-national-157",
        relatedPathogen: "hcv",
        type: "virology",
        question: "哪個肝炎病毒尚未有疫苗，但已有藥物可痊癒？",
        options: [
            "(A) HAV",
            "(B) HBV",
            "(C) HCV",
            "(D) HDV"
        ],
        correctAnswer: "C",
        userNote: "HCV 透過 DAA 藥物治癒率已極高 [cite: 161]"
    },
    {
        id: "999-national-158",
        relatedPathogen: "influenza_virus",
        type: "virology",
        question: "有關流感病毒蛋白 NA 的敘述，何者最不適當？",
        options: [
            "(A) 幫助病毒離開宿主細胞",
            "(B) A 型流感具有多種 NA 亞型",
            "(C) 為金剛烷胺 (amantadine) 主要抑制對象",
            "(D) 在外套膜上形成四倍體"
        ],
        correctAnswer: "C",
        userNote: "Amantadine 抑制 M2；NA 抑制劑是 Oseltamivir [cite: 162]"
    },
    {
        id: "999-national-159",
        relatedPathogen: "rotavirus",
        type: "virology",
        question: "有關輪狀病毒的特色，下列敘述何者最不適當？",
        options: [
            "(A) 是一個雙股 RNA 病毒",
            "(B) ISVP 不具感染力",
            "(C) 基因體由多段 RNA 組成",
            "(D) 對腸胃道環境耐受性高"
        ],
        correctAnswer: "B",
        userNote: "ISVP 在腸道中反而更具穿透力與感染力 [cite: 163]"
    },
    {
        id: "999-national-160",
        relatedPathogen: "measles_virus",
        type: "clinical",
        question: "關於麻疹（Measles）的敘述，下列何者最適當？",
        options: [
            "(A) 屬黏液病毒 (Myxovirus)",
            "(B) 基因體為八段單股 RNA",
            "(C) 具有多種血清型",
            "(D) T 細胞攻擊被感染細胞造成大塊紅斑 (rash)"
        ],
        correctAnswer: "D",
        userNote: "疹子是免疫系統 (CTL) 對抗病毒造成的發炎反應 [cite: 164]"
    },
    {
        id: "999-national-161",
        relatedPathogen: "zika_virus",
        type: "virology",
        question: "有關茲卡（Zika）病毒的敘述何者最不適當？",
        options: [
            "(A) 猴子是宿主之一",
            "(B) 可以直接人傳人",
            "(C) 遺傳基因為負股 (-)RNA",
            "(D) 懷孕感染會造成小腦症"
        ],
        correctAnswer: "C",
        userNote: "Zika 屬於 Flaviviridae，為正股 (+)ssRNA [cite: 165]"
    }
];


