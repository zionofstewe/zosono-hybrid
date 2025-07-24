export interface ServiceStat {
  iconName: "Award" | "Users" | "Clock" | "TrendingUp" | "Eye" | "Target"
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export interface Service {
  category: string
  headline: string
  subheadline: string
  stats: ServiceStat[]
}

export const servicesData: Service[] = [
  {
    category: "LIVE SHOPPING & COMMERCE STREAMING",
    headline: "Transform Viewers Into Buyers. Live.",
    subheadline: "Studio Productions • Real-Time Engagement • Instant Conversions",
    stats: [
      { iconName: "TrendingUp", value: 500, suffix: "+", label: "Live Sessions" },
      { iconName: "Eye", value: 3.2, suffix: "M", label: "Live Viewers" },
      { iconName: "Target", value: 420, suffix: "%", label: "Sales Boost" },
    ],
  },
  {
    category: "SOCIAL MEDIA MASTERY",
    headline: "Stop Posting Into the Void. Start Building an Empire.",
    subheadline: "Strategic Content • Community Building • Real Conversions",
    stats: [
      { iconName: "Eye", value: 200, suffix: "M+", label: "Total Reach" },
      { iconName: "TrendingUp", value: 8.5, suffix: "%", label: "Avg Engagement" },
      { iconName: "Target", value: 45, suffix: "%", label: "Sales Conversion" },
    ],
  },
  {
    category: "INFLUENCER & AFFILIATE MARKETING",
    headline: "Turn Influence Into Invoice Numbers.",
    subheadline: "Creator Networks • Affiliate Systems • Measurable ROI",
    stats: [
      { iconName: "Users", value: 850, suffix: "+", label: "Creators" },
      { iconName: "Eye", value: 125, suffix: "M", label: "Combined Reach" },
      { iconName: "Award", value: 12, suffix: ":1", label: "Avg ROAS" },
    ],
  },
  {
    category: "AI-POWERED CONTENT PRODUCTION",
    headline: "10x Content Output. Zero Quality Compromise.",
    subheadline: "AI Creation • Human Creativity • Unlimited Scale",
    stats: [
      { iconName: "Target", value: 10, suffix: "K+", label: "Assets Created" },
      { iconName: "Clock", value: 72, suffix: "hr", label: "Faster Delivery" },
      { iconName: "TrendingUp", value: 60, suffix: "%", label: "Cost Efficiency" },
    ],
  },
  {
    category: "DATA INTELLIGENCE & ANALYTICS",
    headline: "Your Competitors Guess. You'll Know.",
    subheadline: "Predictive Analytics • Real-time Insights • Growth Intelligence",
    stats: [
      { iconName: "Award", value: 94, suffix: "%", label: "Prediction Accuracy" },
      { iconName: "Eye", value: 500, suffix: "+", label: "Data Points" },
      { iconName: "TrendingUp", value: 35, suffix: "%", label: "Faster Decisions" },
    ],
  },
  {
    category: "360° CUSTOMER GROWTH HACKING",
    headline: "Every Touchpoint. One Strategy. Exponential Growth.",
    subheadline: "Journey Mapping • Experience Design • Retention Science",
    stats: [
      { iconName: "TrendingUp", value: 3.8, suffix: "x", label: "Conversion Lift" },
      { iconName: "Users", value: 73, suffix: "%", label: "Retention Lift" },
      { iconName: "Target", value: 4.2, suffix: "x", label: "Customer LTV" },
    ],
  },
]
