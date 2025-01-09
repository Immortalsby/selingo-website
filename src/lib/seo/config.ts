interface SeoConfig {
  title: string
  description: string
  keywords: string[]
}

interface LocaleSeoConfig {
  [key: string]: SeoConfig
}

export const seoConfig: { [locale: string]: LocaleSeoConfig } = {
  zh: {
    home: {
      title: 'SELINGO - AI驱动的儿童社会情感学习平台 | 3-16岁儿童情商教育专家',
      description: 'SELINGO是领先的儿童社会情感学习(SEL)平台，运用AI技术为3-16岁儿童提供个性化的情商教育。帮助孩子培养自我认知、情绪管理、社交技能和同理心。',
      keywords: [
        '儿童情商教育',
        '社会情感学习',
        'SEL教育',
        '儿童心理发展',
        '情绪管理',
        '社交技能',
        'AI教育',
        '儿童教育app',
        '3-16岁教育',
        '情商培养'
      ]
    },
    about: {
      title: '关于SELINGO | 用AI创新推动儿童情商教育发展',
      description: 'SELINGO团队由儿童教育专家、心理学家和AI工程师组成，致力于为全球儿童提供科学、有效的情商教育解决方案。',
      keywords: [
        'SELINGO团队',
        '儿童教育创新',
        'AI教育公司',
        '情商教育理念',
        '教育科技',
        '儿童发展',
        '教育专家团队'
      ]
    },
    product: {
      title: 'SELINGO产品 | AI驱动的儿童情商教育解决方案',
      description: 'SELINGO提供智能化的情商教育产品，包括AI情感互动、个性化学习、趣味游戏等功能，全方位培养孩子的社会情感能力。',
      keywords: [
        '儿童教育产品',
        '情商教育app',
        'AI教育工具',
        '儿童学习软件',
        '情感教育平台',
        '智能教育',
        '教育应用'
      ]
    },
    sel: {
      title: 'SEL教育 | 科学的社会情感学习体系',
      description: '了解社会情感学习(SEL)的重要性和核心框架，SELINGO基于CASEL五大核心能力，帮助儿童全面发展情商和社交能力。',
      keywords: [
        'SEL教育',
        '社会情感学习',
        '情商教育体系',
        '儿童发展框架',
        'CASEL框架',
        '核心能力培养',
        '情感教育方法'
      ]
    }
  },
  en: {
    home: {
      title: 'SELINGO - AI-Powered Social Emotional Learning Platform | EQ Education Expert for Ages 3-16',
      description: 'SELINGO is a leading Social Emotional Learning (SEL) platform using AI to provide personalized EQ education for children aged 3-16, developing self-awareness, emotional management, social skills, and empathy.',
      keywords: [
        'children EQ education',
        'social emotional learning',
        'SEL education',
        'child psychological development',
        'emotional management',
        'social skills',
        'AI education',
        'children education app',
        'ages 3-16 education',
        'EQ development'
      ]
    },
    about: {
      title: 'About SELINGO | Innovating Children\'s EQ Education with AI',
      description: 'SELINGO team consists of child education experts, psychologists, and AI engineers, dedicated to providing scientific and effective EQ education solutions for children worldwide.',
      keywords: [
        'SELINGO team',
        'children education innovation',
        'AI education company',
        'EQ education philosophy',
        'edtech',
        'child development',
        'education expert team'
      ]
    },
    product: {
      title: 'SELINGO Products | AI-Driven Children\'s EQ Education Solutions',
      description: 'SELINGO offers intelligent EQ education products featuring AI emotional interaction, personalized learning, and fun games to comprehensively develop children\'s social-emotional abilities.',
      keywords: [
        'children education products',
        'EQ education app',
        'AI education tools',
        'children learning software',
        'emotional education platform',
        'intelligent education',
        'education applications'
      ]
    },
    sel: {
      title: 'SEL Education | Scientific Social-Emotional Learning System',
      description: 'Understand the importance and core framework of Social-Emotional Learning (SEL). SELINGO helps children develop EQ and social skills based on CASEL\'s five core competencies.',
      keywords: [
        'SEL education',
        'social emotional learning',
        'EQ education system',
        'child development framework',
        'CASEL framework',
        'core competencies',
        'emotional education methods'
      ]
    }
  },
  fr: {
    home: {
      title: 'SELINGO - Plateforme d\'Apprentissage Socio-Émotionnel Alimentée par l\'IA | Expert en Éducation Émotionnelle pour 3-16 ans',
      description: 'SELINGO est une plateforme leader d\'apprentissage socio-émotionnel (SEL) utilisant l\'IA pour fournir une éducation émotionnelle personnalisée aux enfants de 3 à 16 ans.',
      keywords: [
        'éducation émotionnelle enfants',
        'apprentissage socio-émotionnel',
        'éducation SEL',
        'développement psychologique enfant',
        'gestion émotionnelle',
        'compétences sociales',
        'éducation IA',
        'application éducative enfants',
        'éducation 3-16 ans',
        'développement QE'
      ]
    },
    about: {
      title: 'À Propos de SELINGO | Innovation dans l\'Éducation Émotionnelle avec l\'IA',
      description: 'L\'équipe SELINGO est composée d\'experts en éducation infantile, de psychologues et d\'ingénieurs en IA, dédiés à fournir des solutions éducatives émotionnelles scientifiques et efficaces.',
      keywords: [
        'équipe SELINGO',
        'innovation éducation enfants',
        'entreprise éducation IA',
        'philosophie éducation émotionnelle',
        'edtech',
        'développement enfant',
        'équipe experts éducation'
      ]
    },
    product: {
      title: 'Produits SELINGO | Solutions d\'Éducation Émotionnelle Basées sur l\'IA',
      description: 'SELINGO propose des produits d\'éducation émotionnelle intelligents avec interaction émotionnelle IA, apprentissage personnalisé et jeux éducatifs.',
      keywords: [
        'produits éducation enfants',
        'application éducation émotionnelle',
        'outils éducation IA',
        'logiciel apprentissage enfants',
        'plateforme éducation émotionnelle',
        'éducation intelligente',
        'applications éducatives'
      ]
    },
    sel: {
      title: 'Éducation SEL | Système Scientifique d\'Apprentissage Socio-Émotionnel',
      description: 'Comprendre l\'importance et le cadre fondamental de l\'apprentissage socio-émotionnel (SEL). SELINGO aide les enfants à développer leur QE basé sur les cinq compétences CASEL.',
      keywords: [
        'éducation SEL',
        'apprentissage socio-émotionnel',
        'système éducation émotionnelle',
        'cadre développement enfant',
        'cadre CASEL',
        'compétences fondamentales',
        'méthodes éducation émotionnelle'
      ]
    }
  }
} 