import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const translations = {
  en: {
    navbar_start: "START TRAINING",
    hero_version: "VERSION 1.0.0 // ACTIVE_PROTOCOL",
    hero_title1: "IRON DISCIPLINE,",
    hero_title2: "IRON LAW.",
    hero_btn: "Start Training Now",
    hero_desc: "The definitive operating system for professional strength athletes. Precision engineering for the pursuit of absolute power.",
    sys_title: "TRAINING_SYSTEMS",
    sys_desc: "Hardcoded protocols for linear and undulating periodization. No guesswork, only results.",
    sys_id: "[SYS_ID: PR_DOMINANCE]",
    p1_tag: "Protocol 01",
    p1_title: "Wendler 5/3/1",
    p1_ph1: "Phase 1: Accumulation",
    p1_ph2: "Phase 2: Intensification",
    p1_load: "System Load: High",
    p2_tag: "Protocol 02",
    p2_title: "StrongLifts 5x5",
    p2_desc: "A foundational linear progression model designed for maximum efficiency. Squat every workout. Add weight every session. Maintain iron discipline.",
    p2_sets: "Sets x Reps",
    p2_inc: "Session Increment",
    p2_btn: "Initialize Protocol",
    trk_title1: "SMART_TRACKING",
    trk_title2: "ALGORITHMIC PR.",
    trk_epley_title: "EPLEY 1RM ESTIMATION",
    trk_epley_desc1: "Real-time projection using the Epley Formula: ",
    trk_epley_desc2: ". Calculate potential before you commit to the bar.",
    trk_load_title: "AUTOMATED LOAD CALC",
    trk_load_desc: "Adaptive rounding logic for standard 20kg bars and fractional plates. Zero manual math during high-stress sets.",
    trk_amrap_title: "AMRAP ANALYSIS",
    trk_amrap_desc: "Automated fatigue tracking via As Many Reps As Possible (AMRAP). If you fail the law, the system adjusts the protocol.",
    diag_title: "Live_Diagnostics: 1RM_Trend",
    diag_user: "User: ALPHA_STRENGTH",
    diag_fatigue: "Fatigue Level",
    diag_recovery: "Recovery RPE",
    diag_volume: "Volume Load",
    diag_status: "Status: Protocol Optimized",
    priv_title: "PRIVACY POLICY",
    priv_policy: [
      {
        title: 'Data We Collect',
        body: 'IronLogix stores only the data you provide directly within the app:\n\n• Training records (sets, reps, weights, dates)\n• 1RM values and training max settings\n• Profile preferences (unit system, language, rest alert)\n• Program configuration (TM ratio, increment settings)',
      },
      {
        title: 'Data We Do NOT Collect',
        body: '• No personally identifiable information (name, email, phone)\n• No device identifiers or advertising IDs\n• No location data\n• No analytics or usage tracking\n• No data is transmitted to any third-party server',
      },
      {
        title: 'How Data Is Stored',
        body: 'All data is stored locally on your device using native storage. Your training data is also synced across your Apple devices via iCloud using CloudKit, encrypted and stored in your private iCloud container. Only you can access this data through your Apple ID.',
      },
      {
        title: 'iCloud Sync',
        body: 'Your training data is automatically synced across your Apple devices using your iCloud account. Apple\'s standard privacy and encryption policies apply.',
      },
      {
        title: 'Data Sharing',
        body: 'We do not sell, share, or transfer your data to any third party. Your data remains on your device and in your private iCloud container at all times.',
      },
      {
        title: 'Data Retention & Deletion',
        body: 'Data is retained as long as the app is installed. You can delete all data at any time by using the "Reset All Data" function in Profile > Security & Data. Uninstalling the app will also remove all locally stored data. iCloud-synced data can be managed through your iCloud settings.',
      },
      {
        title: 'Children\'s Privacy',
        body: 'IronLogix does not knowingly collect data from children under 13. The app does not require account registration or personal information.',
      },
      {
        title: 'Changes to This Policy',
        body: 'We may update this privacy policy from time to time. Changes will be reflected within the app. Continued use of the app after changes constitutes acceptance of the updated policy.',
      },
    ],
    priv_desc: "IronLogix operates on a zero-collection architecture. Your biometric data, training logs, and personal metrics remain on your local device or your secure iCloud container.",
    priv_dev_title: "Device Local",
    priv_dev_desc: "Data never leaves the physical hardware of your iPhone/iPad.",
    priv_trk_title: "Zero Tracking",
    priv_trk_desc: "No third-party cookies, no marketing SDKs, no behavioral analysis.",
    priv_enc_title: "Encrypted Vault",
    priv_enc_desc: "Industry-standard encryption for all training history and notes.",
    cta_title1: "ENFORCE THE",
    cta_title2: "LAW.",
    cta_stat: "Total Lifts Logged",
    ft_priv: "Privacy Protocol",
    ft_terms: "Terms of Engagement",
    ft_status: "System Status",
    ft_copy: "©2026 IRONLOGIX. IRON DISCIPLINE, IRON LAW.",
    ft_icp: ""
  },
  zh: {
    navbar_start: "开始训练",
    hero_version: "版本 1.0.0 // 激活_协议",
    hero_title1: "钢铁纪律，",
    hero_title2: "铁血法则。",
    hero_btn: "立即开始训练",
    hero_desc: "专为职业力量运动员打造的终极操作系统。为追求绝对力量而进行精密工程设计。",
    sys_title: "训练_系统",
    sys_desc: "硬编码的线性与波浪形周期化协议。拒绝猜测，只看结果。",
    sys_id: "[系统_ID: 个人记录_主导]",
    p1_tag: "协议 01",
    p1_title: "Wendler 5/3/1",
    p1_ph1: "阶段 1: 积累",
    p1_ph2: "阶段 2: 强化",
    p1_load: "系统负载: 高",
    p2_tag: "协议 02",
    p2_title: "StrongLifts 5x5",
    p2_desc: "为最高效率设计的基础线性递增模型。每次训练都深蹲。每次训练都加重。保持钢铁纪律。",
    p2_sets: "组数 x 次数",
    p2_inc: "单次增重",
    p2_btn: "初始化协议",
    trk_title1: "智能_追踪",
    trk_title2: "算法级 PR。",
    trk_epley_title: "EPLEY 1RM 估算",
    trk_epley_desc1: "使用 Epley 公式进行实时预测: ",
    trk_epley_desc2: "。在您举起杠铃前计算潜在能力。",
    trk_load_title: "自动负荷计算",
    trk_load_desc: "标准 20kg 杠铃和分数杠铃片的自适应舍入逻辑。在高压组中实现零手动计算。",
    trk_amrap_title: "AMRAP 分析",
    trk_amrap_desc: "通过“尽可能多做”（AMRAP）进行自动疲劳追踪。如果您未能达成目标，系统将调整协议。",
    diag_title: "实时_诊断: 1RM_趋势",
    diag_user: "用户: ALPHA_STRENGTH",
    diag_fatigue: "疲劳水平",
    diag_recovery: "恢复 RPE",
    diag_volume: "容量负荷",
    diag_status: "状态: 协议已优化",
    priv_title: "隐私政策",
    priv_policy: [
      {
        title: '我们收集的数据',
        body: 'IronLogix 仅存储您在应用内直接提供的数据：\n\n• 训练记录（组数、次数、重量、日期）\n• 1RM 数值和训练极限设置\n• 个人偏好（单位制、语言、休息提醒）\n• 计划配置（TM 比例、增量设置）',
      },
      {
        title: '我们不会收集的数据',
        body: '• 不收集个人身份信息（姓名、邮箱、电话）\n• 不收集设备标识符或广告 ID\n• 不收集位置数据\n• 不进行数据分析或使用追踪\n• 不向任何第三方服务器传输数据',
      },
      {
        title: '数据存储方式',
        body: '所有数据均通过本地存储保存在您的设备上。您的训练数据同时通过 iCloud 在您的 Apple 设备间自动同步，经 CloudKit 加密存储在您的私有 iCloud 容器中。只有通过您的 Apple ID 才能访问这些数据。',
      },
      {
        title: 'iCloud 同步',
        body: '您的训练数据将通过 iCloud 账户在您的 Apple 设备间自动同步，适用 Apple 的标准隐私和加密政策。',
      },
      {
        title: '数据共享',
        body: '我们不会出售、共享或将您的数据转让给任何第三方。您的数据始终保存在您的设备及私有 iCloud 容器中。',
      },
      {
        title: '数据保留与删除',
        body: '数据在应用安装期间予以保留。您可以随时通过"档案 > 安全与数据 > 重置所有数据"功能删除所有数据。卸载应用也将删除所有本地存储的数据。通过 iCloud 同步的数据可通过 iCloud 设置管理。',
      },
      {
        title: '儿童隐私',
        body: 'IronLogix 不会有意收集 13 岁以下儿童的数据。本应用无需注册账户或提供个人信息。',
      },
      {
        title: '政策变更',
        body: '我们可能会不时更新本隐私政策。变更将在应用内展示。继续使用应用即表示您接受更新后的政策。',
      },
    ],
    priv_desc: "IronLogix 采用零收集架构运行。您的生物特征数据、训练日志和个人指标保留在您的本地设备或安全的 iCloud 容器中。",
    priv_dev_title: "设备本地",
    priv_dev_desc: "数据绝不会离开您的 iPhone/iPad 物理硬件。",
    priv_trk_title: "零追踪",
    priv_trk_desc: "无第三方 Cookie，无营销 SDK，无行为分析。",
    priv_enc_title: "加密金库",
    priv_enc_desc: "所有训练历史和笔记均采用行业标准加密。",
    cta_title1: "执行",
    cta_title2: "法则。",
    cta_stat: "总记录举重次数",
    ft_priv: "隐私协议",
    ft_terms: "参与条款",
    ft_status: "系统状态",
    ft_copy: "©2026 IRONLOGIX. IRON DISCIPLINE, IRON LAW。",
    ft_icp: "ICP备案号：待备案-1"
  },
  es: {
    navbar_start: "INICIAR ENTRENAMIENTO",
    hero_version: "VERSIÓN 1.0.0 // PROTOCOLO_ACTIVO",
    hero_title1: "DISCIPLINA DE HIERRO,",
    hero_title2: "LEY DE HIERRO.",
    hero_btn: "Iniciar Entrenamiento Ahora",
    hero_desc: "El sistema operativo definitivo para atletas de fuerza profesionales. Ingeniería de precisión para la búsqueda del poder absoluto.",
    sys_title: "SISTEMAS_DE_ENTRENAMIENTO",
    sys_desc: "Protocolos codificados para periodización lineal y ondulante. Sin conjeturas, solo resultados.",
    sys_id: "[ID_SIS: DOMINIO_PR]",
    p1_tag: "Protocolo 01",
    p1_title: "Wendler 5/3/1",
    p1_ph1: "Fase 1: Acumulación",
    p1_ph2: "Fase 2: Intensificación",
    p1_load: "Carga del Sistema: Alta",
    p2_tag: "Protocolo 02",
    p2_title: "StrongLifts 5x5",
    p2_desc: "Un modelo fundacional de progresión lineal diseñado para máxima eficiencia. Sentadillas en cada sesión. Añade peso en cada sesión. Mantén la disciplina de hierro.",
    p2_sets: "Series x Reps",
    p2_inc: "Incremento por Sesión",
    p2_btn: "Inicializar Protocolo",
    trk_title1: "SEGUIMIENTO_INTELIGENTE",
    trk_title2: "PR ALGORÍTMICO.",
    trk_epley_title: "ESTIMACIÓN 1RM EPLEY",
    trk_epley_desc1: "Proyección en tiempo real usando la Fórmula Epley: ",
    trk_epley_desc2: ". Calcula el potencial antes de comprometerte con la barra.",
    trk_load_title: "CÁLCULO DE CARGA AUTOMATIZADO",
    trk_load_desc: "Lógica de redondeo adaptativo para barras estándar de 20kg y discos fraccionales. Cero matemáticas manuales durante series de alto estrés.",
    trk_amrap_title: "ANÁLISIS AMRAP",
    trk_amrap_desc: "Seguimiento automatizado de fatiga vía As Many Reps As Possible (AMRAP). Si fallas la ley, el sistema ajusta el protocolo.",
    diag_title: "Diagnósticos_En_Vivo: Tendencia_1RM",
    diag_user: "Usuario: ALPHA_STRENGTH",
    diag_fatigue: "Nivel de Fatiga",
    diag_recovery: "RPE de Recuperación",
    diag_volume: "Carga de Volumen",
    diag_status: "Estado: Protocolo Optimizado",
    priv_title: "POLÍTICA DE PRIVACIDAD",
    priv_policy: [],
    priv_desc: "IronLogix opera en una arquitectura de cero recolección. Tus datos biométricos, registros de entrenamiento y métricas personales permanecen en tu dispositivo local o contenedor seguro de iCloud. No queremos tus datos; solo queremos tu fuerza.",
    priv_dev_title: "Local en Dispositivo",
    priv_dev_desc: "Los datos nunca abandonan el hardware físico de tu iPhone/iPad.",
    priv_trk_title: "Cero Seguimiento",
    priv_trk_desc: "Sin cookies de terceros, sin SDKs de marketing, sin análisis de comportamiento.",
    priv_enc_title: "Bóveda Encriptada",
    priv_enc_desc: "Encriptación estándar de la industria para todo el historial de entrenamiento y notas.",
    cta_title1: "HAZ CUMPLIR LA",
    cta_title2: "LEY.",
    cta_stat: "Levantamientos Totales Registrados",
    ft_priv: "Protocolo de Privacidad",
    ft_terms: "Términos de Compromiso",
    ft_status: "Estado del Sistema",
    ft_copy: "©2026 IRONLOGIX. DISCIPLINA DE HIERRO, LEY DE HIERRO.",
    ft_icp: ""
  },
  fr: {
    navbar_start: "COMMENCER L'ENTRAÎNEMENT",
    hero_version: "VERSION 1.0.0 // PROTOCOLE_ACTIF",
    hero_title1: "DISCIPLINE DE FER,",
    hero_title2: "LOI DE FER.",
    hero_btn: "Commencer L'entraînement",
    hero_desc: "Le système d'exploitation définitif pour les athlètes de force professionnels. Ingénierie de précision pour la quête du pouvoir absolu.",
    sys_title: "SYSTÈMES_D'ENTRAÎNEMENT",
    sys_desc: "Protocoles codés en dur pour la périodisation linéaire et ondulatoire. Pas de devinettes, que des résultats.",
    sys_id: "[ID_SYS: DOMINANCE_PR]",
    p1_tag: "Protocole 01",
    p1_title: "Wendler 5/3/1",
    p1_ph1: "Phase 1: Accumulation",
    p1_ph2: "Phase 2: Intensification",
    p1_load: "Charge Système: Élevée",
    p2_tag: "Protocole 02",
    p2_title: "StrongLifts 5x5",
    p2_desc: "Un modèle de progression linéaire fondamental conçu pour une efficacité maximale. Squat à chaque séance. Ajoutez du poids à chaque séance. Maintenez une discipline de fer.",
    p2_sets: "Séries x Répétitions",
    p2_inc: "Incrément de Séance",
    p2_btn: "Initialiser le Protocole",
    trk_title1: "SUIVI_INTELLIGENT",
    trk_title2: "PR ALGORITHMIQUE.",
    trk_epley_title: "ESTIMATION 1RM EPLEY",
    trk_epley_desc1: "Projection en temps réel utilisant la Formule Epley: ",
    trk_epley_desc2: ". Calculez le potentiel avant de vous engager sur la barre.",
    trk_load_title: "CALCUL DE CHARGE AUTOMATISÉ",
    trk_load_desc: "Logique d'arrondi adaptative pour les barres standard de 20kg et les disques fractionnels. Zéro calcul manuel pendant les séries à fort stress.",
    trk_amrap_title: "ANALYSE AMRAP",
    trk_amrap_desc: "Suivi automatisé de la fatigue via As Many Reps As Possible (AMRAP). Si vous échouez à la loi, le système ajuste le protocole.",
    diag_title: "Diagnostics_En_Direct: Tendance_1RM",
    diag_user: "Utilisateur: ALPHA_STRENGTH",
    diag_fatigue: "Niveau de Fatigue",
    diag_recovery: "RPE de Récupération",
    diag_volume: "Charge de Volume",
    diag_status: "Statut: Protocole Optimisé",
    priv_title: "POLITIQUE DE CONFIDENTIALITÉ",
    priv_policy: [],
    priv_desc: "IronLogix fonctionne sur une architecture sans collecte. Vos données biométriques, journaux d'entraînement et métriques personnelles restent sur votre appareil local ou votre conteneur iCloud sécurisé. Nous ne voulons pas de vos données ; nous ne voulons que votre force.",
    priv_dev_title: "Local sur l'Appareil",
    priv_dev_desc: "Les données ne quittent jamais le matériel physique de votre iPhone/iPad.",
    priv_trk_title: "Zéro Suivi",
    priv_trk_desc: "Pas de cookies tiers, pas de SDK marketing, pas d'analyse comportementale.",
    priv_enc_title: "Coffre-fort Crypté",
    priv_enc_desc: "Cryptage standard de l'industrie pour tout l'historique d'entraînement et les notes.",
    cta_title1: "FAITES RESPECTER LA",
    cta_title2: "LOI.",
    cta_stat: "Total des Levés Enregistrés",
    ft_priv: "Protocole de Confidentialité",
    ft_terms: "Conditions d'Engagement",
    ft_status: "Statut du Système",
    ft_copy: "©2026 IRONLOGIX. DISCIPLINE DE FER, LOI DE FER.",
    ft_icp: ""
  },
  de: {
    navbar_start: "TRAINING STARTEN",
    hero_version: "VERSION 1.0.0 // AKTIVES_PROTOKOLL",
    hero_title1: "EISERNE DISZIPLIN,",
    hero_title2: "EISERNES GESETZ.",
    hero_btn: "Training Jetzt Starten",
    hero_desc: "Das definitive Betriebssystem für professionelle Kraftsportler. Präzisionstechnik für das Streben nach absoluter Kraft.",
    sys_title: "TRAININGS_SYSTEME",
    sys_desc: "Fest codierte Protokolle für lineare und wellenförmige Periodisierung. Kein Raten, nur Ergebnisse.",
    sys_id: "[SYS_ID: PR_DOMINANZ]",
    p1_tag: "Protokoll 01",
    p1_title: "Wendler 5/3/1",
    p1_ph1: "Phase 1: Akkumulation",
    p1_ph2: "Phase 2: Intensivierung",
    p1_load: "Systemlast: Hoch",
    p2_tag: "Protokoll 02",
    p2_title: "StrongLifts 5x5",
    p2_desc: "Ein grundlegendes lineares Progressionsmodell, entwickelt für maximale Effizienz. Kniebeugen in jedem Training. Gewicht in jeder Einheit erhöhen. Eiserne Disziplin bewahren.",
    p2_sets: "Sätze x Wdh",
    p2_inc: "Einheit-Inkrement",
    p2_btn: "Protokoll Initialisieren",
    trk_title1: "SMART_TRACKING",
    trk_title2: "ALGORITHMISCHER PR.",
    trk_epley_title: "EPLEY 1RM SCHÄTZUNG",
    trk_epley_desc1: "Echtzeit-Projektion mit der Epley-Formel: ",
    trk_epley_desc2: ". Berechnen Sie das Potenzial, bevor Sie an die Hantel gehen.",
    trk_load_title: "AUTOMATISCHE LASTBERECHNUNG",
    trk_load_desc: "Adaptive Rundungslogik für Standard-20kg-Hanteln und Fraktionsscheiben. Null manuelles Rechnen bei stressigen Sätzen.",
    trk_amrap_title: "AMRAP ANALYSE",
    trk_amrap_desc: "Automatische Ermüdungserfassung über As Many Reps As Possible (AMRAP). Wenn Sie das Gesetz brechen, passt das System das Protokoll an.",
    diag_title: "Live_Diagnose: 1RM_Trend",
    diag_user: "Benutzer: ALPHA_STRENGTH",
    diag_fatigue: "Ermüdungsgrad",
    diag_recovery: "Erholungs-RPE",
    diag_volume: "Volumenlast",
    diag_status: "Status: Protokoll Optimiert",
    priv_title: "DATENSCHUTZERKLÄRUNG",
    priv_policy: [],
    priv_desc: "IronLogix arbeitet mit einer Zero-Collection-Architektur. Ihre biometrischen Daten, Trainingsprotokolle und persönlichen Metriken bleiben auf Ihrem lokalen Gerät oder in Ihrem sicheren iCloud-Container. Wir wollen Ihre Daten nicht; wir wollen nur Ihre Kraft.",
    priv_dev_title: "Lokal auf dem Gerät",
    priv_dev_desc: "Daten verlassen niemals die physische Hardware Ihres iPhone/iPad.",
    priv_trk_title: "Zero Tracking",
    priv_trk_desc: "Keine Drittanbieter-Cookies, keine Marketing-SDKs, keine Verhaltensanalyse.",
    priv_enc_title: "Verschlüsselter Tresor",
    priv_enc_desc: "Branchenübliche Verschlüsselung für alle Trainingsverläufe und Notizen.",
    cta_title1: "SETZE DAS",
    cta_title2: "GESETZ DURCH.",
    cta_stat: "Gesamte Aufgezeichnete Lifts",
    ft_priv: "Datenschutzprotokoll",
    ft_terms: "Nutzungsbedingungen",
    ft_status: "Systemstatus",
    ft_copy: "©2026 IRONLOGIX. EISERNE DISZIPLIN, EISERNES GESETZ.",
    ft_icp: ""
  }
};

type Language = keyof typeof translations;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lang, setLang] = useState<Language>('en');

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPathLang = (pathSegments.length > 0 && translations.hasOwnProperty(pathSegments[0])) ? pathSegments[0] : 'en';

  useEffect(() => {
    setLang(currentPathLang as Language);
  }, [currentPathLang]);

  const setLangWithRedirect = (newLang: Language) => {
    if (newLang === currentPathLang) return;

    const segments = [...pathSegments];
    const isCurrentNonEn = segments.length > 0 && translations.hasOwnProperty(segments[0]);

    if (isCurrentNonEn) {
      if (newLang === 'en') {
        segments.shift();
      } else {
        segments[0] = newLang;
      }
    } else {
      if (newLang !== 'en') {
        segments.unshift(newLang);
      }
    }
    navigate('/' + segments.join('/'));
  };

  const t = (key: keyof typeof translations['en']) => {
    return (translations[lang] as any)[key] || (translations['en'] as any)[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: setLangWithRedirect, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
