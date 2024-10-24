"use client";

import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { ArrowRightLeft, Shield, Network, Eye, Clock } from 'lucide-react';


function App() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const categories = [
    {
      title: "Distribution Infrastructure",
      icon: <Network className="w-6 h-6" />,
      cyber: [
        {
          term: "Botnet Networks",
          definition: "Networks of compromised computers controlled remotely to distribute malware"
        },
        {
          term: "Domain Generation",
          definition: "Algorithms creating numerous domains to avoid blocking"
        },
        {
          term: "Platform Exploitation",
          definition: "Hijacking legitimate services to host malicious content"
        },
        {
          term: "Automated Distribution",
          definition: "Using scripts and tools to automatically spread malware"
        },
        {
          term: "Compromised Influencers",
          definition: "Hijacked high-profile accounts used to spread malware"
        },
        {
          term: "Affiliate Networks",
          definition: "Multi-tier distribution networks where compromised nodes recruit others"
        }
      ],
      disinfo: [
        {
          term: "Sockpuppet Networks",
          definition: "Fake accounts controlled by single entity to amplify content"
        },
        {
          term: "Pop-up News Sites",
          definition: "Rapidly created websites mimicking legitimate news sources"
        },
        {
          term: "Platform Manipulation",
          definition: "Exploiting social media algorithms to increase visibility"
        },
        {
          term: "Content Automation",
          definition: "Using bots to generate and distribute false narratives"
        },
        {
          term: "Influencer Amplification",
          definition: "Using influential accounts to rapidly spread narratives to large audiences"
        },
        {
          term: "Multi-Level Marketing",
          definition: "Hierarchical sharing networks where believers recruit others to spread content"
        }
      ]
    },
    {
  title: "Evasion Techniques",
  icon: <Eye className="w-6 h-6" />,
  cyber: [
    {
      term: "Polymorphic Code",
      definition: "Malware that constantly changes its code signature while maintaining functionality to evade detection"
    },
    {
      term: "Process Injection",
      definition: "Malware hiding within legitimate processes to appear as normal system activity"
    },
    {
      term: "Anti-Analysis Techniques",
      definition: "Methods to detect and evade sandboxes, debuggers, and analysis tools"
    },
    {
      term: "Fileless Execution",
      definition: "Operating entirely in memory to avoid file-based detection mechanisms"
    }
  ],
  disinfo: [
    {
      term: "Content Mutation",
      definition: "Continuously modifying content while maintaining core narrative to evade automated detection"
    },
    {
      term: "Narrative Injection",
      definition: "Embedding false narratives within legitimate discussions and trusted sources"
    },
    {
      term: "Anti-Verification Methods",
      definition: "Techniques to complicate fact-checking and avoid automated detection systems"
    },
    {
      term: "Ephemeral Campaigns",
      definition: "Operating through temporary, disposable content that leaves minimal traces"
    }
  ]
},
    {
      title: "Targeting Methods",
      icon: <Shield className="w-6 h-6" />,
      cyber: [
        {
          term: "Social Engineering",
          definition: "Manipulating people into compromising security"
        },
        {
          term: "Trust Exploitation",
          definition: "Abusing trusted relationships to spread malware"
        },
        {
          term: "Payload Testing",
          definition: "Testing different attack methods for effectiveness"
        },
        {
          term: "Target Profiling",
          definition: "Gathering data on potential victims"
        }
      ],
      disinfo: [
        {
          term: "Psychological Targeting",
          definition: "Exploiting emotional triggers and biases"
        },
        {
          term: "Authority Mimicry",
          definition: "Impersonating trusted sources and experts"
        },
        {
          term: "A/B Testing",
          definition: "Testing different narratives for maximum engagement"
        },
        {
          term: "Demographic Profiling",
          definition: "Analyzing audience data to target specific groups"
        }
      ]
    },
    {
      title: "Persistence Mechanisms",
      icon: <Clock className="w-6 h-6" />,
      cyber: [
        {
          term: "Backup C2 Channels",
          definition: "Alternative command and control infrastructure"
        },
        {
          term: "Network Embedding",
          definition: "Establishing deep presence in target networks"
        },
        {
          term: "Infrastructure Resilience",
          definition: "Building redundant attack infrastructure"
        },
        {
          term: "Long-term Access",
          definition: "Maintaining persistent access to compromised systems"
        }
      ],
      disinfo: [
        {
          term: "Alternate Platforms",
          definition: "Using multiple channels to ensure message spread"
        },
        {
          term: "Network Integration",
          definition: "Embedding content in legitimate information flows"
        },
        {
          term: "Distribution Resilience",
          definition: "Creating backup distribution networks"
        },
        {
          term: "Sustained Presence",
          definition: "Maintaining long-term influence campaigns"
        }
      ]
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Card className="max-w-4xl bg-gray-50">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Threat Actor Parallels: Cyber vs Disinformation
          </h2>
          
          <p className="text-sm text-gray-600 italic text-center mb-4">
            Created by <span className="font-semibold">Jackie Singh <a href="https://github.com/hackingbutlegal/threat-parallels">(Github)</a></span>
          </p>

          <div className="space-y-8">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-700">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-5 gap-4">
                  {/* Cyber threats */}
                  <div className="col-span-2">
                    <ul className="space-y-2">
                      {category.cyber.map((item, i) => (
                        <li 
                          key={i} 
                          className="bg-blue-50 p-2 rounded text-sm relative group cursor-help"
                          onMouseEnter={() => setActiveTooltip(`cyber-${idx}-${i}` as any)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          {item.term}
                          {activeTooltip === `cyber-${idx}-${i}` && (
                            <div className="absolute z-10 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -top-2 right-full mr-2">
                              {item.definition}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Center arrow */}
                  <div className="flex items-center justify-center">
                    <ArrowRightLeft className="text-gray-400" />
                  </div>
                  
                  {/* Disinfo threats */}
                  <div className="col-span-2">
                    <ul className="space-y-2">
                      {category.disinfo.map((item, i) => (
                        <li 
                          key={i} 
                          className="bg-red-50 p-2 rounded text-sm relative group cursor-help"
                          onMouseEnter={() => setActiveTooltip(`disinfo-${idx}-${i}` as any)}
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          {item.term}
                          {activeTooltip === `disinfo-${idx}-${i}` && (
                            <div className="absolute z-10 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -top-2 left-full ml-2">
                              {item.definition}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

};

export default App;
