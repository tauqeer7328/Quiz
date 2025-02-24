import { useState } from "react";

const questions = [
    {
      question: "1. What is the name of the U.S. stock market index that tracks 500 large companies?",
      options: ["a) NASDAQ", "b) Dow Jones Industrial Average", "c) S&P 500", "d) Russell 2000"],
      answer: "c) S&P 500",
    },
    {
      question: "2. Which strategy focuses on offering the lowest prices in an industry?",
      options: ["a) Differentiation Strategy", "b) Cost Leadership Strategy", "c) Focus Strategy", "d) Growth Strategy"],
      answer: "b) Cost Leadership Strategy",
    },
    {
      question: "3. In January 2025, which major technology company was the first to reach a $1 trillion market capitalization?",
      options: ["a) Amazon", "b) Apple", "c) Microsoft", "d) Google"],
      answer: "b) Apple",
    },
    {
      question: "4. The World Economic Forum's 2025 annual meeting in Davos focused on which central theme?",
      options: ["a) Globalization 4.0", "b) Rebuilding Trust", "c) Sustainable Development", "d) The Great Reset"],
      answer: "b) Rebuilding Trust",
    },
    {
      question: "5. In January 2025, which company announced the acquisition of Inari Medical for $4.9 billion?",
      options: ["a) Medtronic", "b) Johnson & Johnson", "c) Stryker", "d) Boston Scientific"],
      answer: "d) Boston Scientific",
    },
    {
      question: "6. Which company was the first to reach a $1 trillion market capitalization?",
      options: ["a) Amazon", "b) Apple", "c) Microsoft", "d) Google"],
      answer: "b) Apple",
    },
    {
      question: "7. Which country surpassed China as the world's top exporter in 2024?",
      options: ["Germany", "India", "Japan", "South Korea"],
      answer: "Germany",
    },
    {
      question: "8. What was the primary reason for the U.S. reintroducing tariffs on Chinese EVs in 2025?",
      options: ["Unfair state subsidies and market flooding", "Environmental concerns", "Rising oil prices", "Currency manipulation"],
      answer: "Unfair state subsidies and market flooding",
    },
    {
      question: "9. Which major trade agreement was revised in 2024, causing friction between Canada and the U.S.?",
      options: ["TPP", "ASEAN Free Trade Area", "USMCA", "RCEP"],
      answer: "USMCA",
    },
    {
      question: "10. What was the biggest factor affecting global supply chains in early 2025?",
      options: ["U.S.-Mexico trade disputes", "Brexit complications", "Red Sea shipping disruptions due to conflicts", "Strikes at Amazon warehouses"],
      answer: "Red Sea shipping disruptions due to conflicts",
    },
    {
      question: "11. As of February 2025, which company became the world's most valuable tech company by market capitalization?",
      options: ["Amazon", "Apple", "Nvidia", "Microsoft"],
      answer: "Nvidia",
    },
    {
      question: "12. Which luxury brand completed a $12 billion merger with Richemont in 2024?",
      options: ["LVMH", "Kering", "Prada", "Burberry"],
      answer: "LVMH",
    },
    {
      question: "13. Which company led the race in AI chip production in 2025?",
      options: ["Nvidia", "Intel", "AMD", "TSMC"],
      answer: "Nvidia",
    },
    {
      question: "14. Which automaker announced a record-breaking $10 billion investment in U.S. EV production in 2025?",
      options: ["Tesla", "Toyota", "Ford", "Volkswagen"],
      answer: "Ford",
    },
    {
      question: "15. What caused the biggest crash in global stock markets in late 2024?",
      options: ["Aggressive interest rate hikes by the Federal Reserve", "Oil price surges", "Chinese economic slowdown", "European recession fears"],
      answer: "Aggressive interest rate hikes by the Federal Reserve",
    },
    {
      question: "16. Which country overtook Germany as the world’s third-largest economy in 2024?",
      options: ["India", "Brazil", "South Korea", "UK"],
      answer: "India",
    },
    {
      question: "17. Which bank collapsed in early 2025, sending shockwaves through the financial world?",
      options: ["Deutsche Bank", "JPMorgan Chase", "HSBC", "BNP Paribas"],
      answer: "Deutsche Bank",
    },
    {
      question: "18. Which Middle Eastern country launched a $500 billion sovereign wealth fund in 2025?",
      options: ["Saudi Arabia", "UAE", "Qatar", "Kuwait"],
      answer: "Saudi Arabia",
    },
    {
      question: "19. Which country was blacklisted by the OECD for financial secrecy in 2025?",
      options: ["Panama", "Switzerland", "Luxembourg", "Singapore"],
      answer: "Panama",
    },
    {
      question: "20. Which region introduced strict new ESG (Environmental, Social, and Governance) reporting laws in 2024?",
      options: ["United States", "European Union", "China", "Australia"],
      answer: "European Union",
    },
    {
      question: "21. Which country's tech antitrust laws forced Google to divest part of its ad business in 2025?",
      options: ["United States", "China", "European Union", "India"],
      answer: "European Union",
    },
    {
      question: "22. In 2025, what major tax policy did the G20 agree on?",
      options: ["Global minimum corporate tax of 15%", "Digital currency tax exemption", "Wealth tax on billionaires", "Carbon tax mandate"],
      answer: "Global minimum corporate tax of 15%",
    },
    {
      question: "23. Which global organization was criticized for failing to regulate AI and data monopolies?",
      options: ["WTO", "IMF", "UNCTAD", "BIS"],
      answer: "WTO",
    },
    {
      question: "24. Which African country saw the highest GDP growth in 2024?",
      options: ["Nigeria", "Kenya", "South Africa", "Egypt"],
      answer: "Nigeria",
    },
    {
      question: "25. Which company became the first to develop a commercial quantum computer with practical applications in 2025?",
      options: ["IBM", "Google", "Microsoft", "Intel"],
      answer: "IBM",
    },
    {
      question: "26. Which South American country became the leader in lithium production in 2025?",
      options: ["Argentina", "Chile", "Brazil", "Peru"],
      answer: "Chile",
    },
    {
      question: "27. Which industry saw the largest venture capital funding in 2025?",
      options: ["AI & Machine Learning", "FinTech", "Biotech", "Electric Vehicles"],
      answer: "AI & Machine Learning",
    },
    {
      question: "28. Who was the highest-paid CEO of 2024?",
      options: ["Elon Musk", "Jensen Huang (Nvidia)", "Tim Cook", "Andy Jassy (Amazon)"],
      answer: "Elon Musk",
    },
    {
      question: "28. Which billionaire was the biggest philanthropist of 2024, donating over $15 billion?",
      options: ["Warren Buffett", "Bill Gates", "Jeff Bezos", "MacKenzie Scott"],
      answer: "MacKenzie Scott",
    },
    {
      question: "29. Which social media platform saw the fastest user growth in 2024?",
      options: ["TikTok", "X (formerly Twitter)", "Instagram", "LinkedIn"],
      answer: "TikTok",
    },
    {
      question: "30. Which country saw the largest corporate tax hike in 2025?",
      options: ["United Kingdom", "United States", "Japan", "France"],
      answer: "Japan",
    },
    {
      question: "31. Which company was fined $10 billion for privacy violations in 2025?",
      options: ["Meta (Facebook)", "Google", "Amazon", "TikTok"],
      answer: "Meta (Facebook)",
    },
    {
      question: "32. Which economic theory supports free trade by arguing that countries should specialize in goods they can produce most efficiently?",
      options: ["Keynesian Theory", "Absolute Advantage", "Comparative Advantage", "Game Theory"],
      answer: "Comparative Advantage",
    },
    {
      question: "33. Which international financial institution provides loans and grants to developing countries for capital projects?",
      options: ["World Bank", "International Monetary Fund (IMF)", "Bank for International Settlements", "United Nations Development Programme"],
      answer: "World Bank",
    },
    {
      question: "34. The term 'balance of payments' refers to:",
      options: ["A country's financial transactions with the rest of the world", "The trade balance only", "The amount of money held in foreign reserves", "The country's domestic monetary policy"],
      answer: "A country's financial transactions with the rest of the world",
    },
    {
      question: "35. Which economist is credited with the theory of 'creative destruction,' which explains how innovation disrupts industries?",
      options: ["John Maynard Keynes", "Adam Smith", "Milton Friedman", "Joseph Schumpeter"],
      answer: "Joseph Schumpeter",
    },
    {
      question: "36. What is the primary purpose of the World Trade Organization (WTO)?",
      options: ["To regulate international trade and resolve disputes", "To provide loans to developing nations", "To stabilize global currency exchange rates", "To impose tariffs on unfair trading nations"],
      answer: "To regulate international trade and resolve disputes",
    },
    {
      question: "37. What is the legal principle that prevents a government from expropriating foreign investments without compensation?",
      options: ["National Treatment", "Sovereign Immunity", "Capital Controls", "Trade Reciprocity"],
      answer: "Sovereign Immunity",
    },
    {
      question: "38. The European Union’s GDPR law primarily concerns:",
      options: ["Taxation on digital services", "Data privacy and protection", "Trade barriers and tariffs", "Intellectual property rights"],
      answer: "Data privacy and protection",
    },
    {
      question: "39. What is the 'Foreign Corrupt Practices Act' (FCPA) primarily designed to prevent?",
      options: ["Bribery of foreign officials by U.S. companies", "Corporate espionage", "Tax evasion in offshore accounts", "Currency manipulation"],
      answer: "Bribery of foreign officials by U.S. companies",
    },
    {
      question: "40. Which strategy involves a company expanding into new markets by acquiring existing businesses?",
      options: ["Horizontal Integration", "Vertical Integration", "Joint Venture", "Franchising"],
      answer: "Horizontal Integration",
    },
    {
      question: "41. Which company is known for pioneering the franchise business model?",
      options: ["Amazon", "Starbucks", "McDonald’s", "Walmart"],
      answer: "McDonald’s",
    },
    {
      question: "42. Which U.S. stock market index tracks 30 of the largest publicly traded companies?",
      options: ["S&P 500", "Dow Jones Industrial Average", "NASDAQ Composite", "Russell 2000"],
      answer: "Dow Jones Industrial Average",
    },
    {
      question: "43. A country’s central bank increases interest rates to:",
      options: ["Control inflation", "Encourage economic growth", "Increase exports", "Boost consumer spending"],
      answer: "Control inflation",
    },
    {
      question: "44. Which of the following is a key function of the International Monetary Fund (IMF)?",
      options: ["Providing financial assistance to countries facing economic crises", "Regulating international trade", "Issuing global currency", "Managing multinational corporations"],
      answer: "Providing financial assistance to countries facing economic crises",
    },
    {
      question: "45. Which famous business leader wrote 'The Art of the Deal'?",
      options: ["Donald Trump", "Warren Buffett", "Steve Jobs", "Elon Musk"],
      answer: "Donald Trump",
    },
    {
      question: "46. Which company pioneered the concept of shareholder value maximization in the 1980s?",
      options: ["General Electric (GE)", "Toyota", "Walmart", "Apple"],
      answer: "General Electric (GE)",
    },
    {
      question: "47. Which corporate scandal led to the creation of the Sarbanes-Oxley Act in 2002?",
      options: ["Enron", "Lehman Brothers", "WorldCom", "Volkswagen"],
      answer: "Enron",
    },
    {
      question: "48. Which company is often credited with the invention of modern e-commerce?",
      options: ["Alibaba", "Amazon", "eBay", "Shopify"],
      answer: "Amazon",
    },
    {
      question: "49. Which innovation is associated with Henry Ford?",
      options: ["Assembly line production", "Just-in-time manufacturing", "Electric cars", "Cryptocurrency"],
      answer: "Assembly line production",
    },
    {
      question: "50. Which company is a pioneer in cloud computing services?",
      options: ["Amazon (AWS)", "IBM", "Oracle", "Facebook"],
      answer: "Amazon (AWS)",
    },
    {
      question: "51. Which modern tech company was founded in a garage in 1976?",
      options: ["Apple", "Google", "Microsoft", "Tesla"],
      answer: "Apple",
    },
  ];


export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  const currentQues = questions[currentQuestion];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-125">
        {/* Question */}
        <h1 className="text-2xl font-bold mb-4">{currentQues.question}</h1>

        {/* Options - Displayed in a column */}
        <div className="flex flex-col space-y-3">
          {currentQues.options.map((option, index) => {
            const isCorrectAnswer = option === currentQues.answer;
            const isSelectedAndWrong = selectedOption === option && selectedOption !== currentQues.answer;

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 ${
                  showResult && isCorrectAnswer
                    ? "bg-green-200" // Green highlight for correct answer
                    : isSelectedAndWrong
                    ? "bg-red-200" // Red for wrong selected answer
                    : ""
                }`}
                disabled={showResult}
              >
                {option}
              </button>
            );
          })}
        </div>
        {/* Result */}
        {showResult && (
          <div className="mt-4">
            {selectedOption === currentQues.answer ? (
              <p className="text-green-600 font-bold">Correct Answer🎉</p>
            ) : (
              <div>
                <p className="text-red-600 font-bold">Wrong Answer😢</p>
                <p className="text-green-600 font-bold mt-2">
                  Correct Answer: {currentQues.answer}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={handleNextQuestion}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
