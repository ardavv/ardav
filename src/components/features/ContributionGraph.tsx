"use client";

import { useEffect, useState } from "react";
import {ActivityCalendar} from "react-activity-calendar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Github } from "lucide-react";

// Change this to your GitHub username
const GITHUB_USERNAME = "ardavv"; // Using 'fathur-m' likely based on FATMUH context, user can change

export function ContributionGraph() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        const json = await response.json();
        
        // Transform data if necessary, or just use json.contributions
        // The API returns { contributions: Array<{ date, count, level }> }
        if (json.contributions) {
           setData(json.contributions);
        }
      } catch (error) {
        console.error("Failed to fetch contribution data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
        <div className="w-full h-32 animate-pulse bg-muted rounded-xl border border-border/50" />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Github className="h-5 w-5" />
            Contribution Activity
        </h3>
        <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
            @{GITHUB_USERNAME}
        </Link>
      </div>
      
      <div className="w-full overflow-hidden overflow-x-auto p-4 border border-border/50 rounded-xl bg-card/50">
        <ActivityCalendar
            data={data}
            theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            showWeekdayLabels
            labels={{
                legend: {
                    less: 'Less',
                    more: 'More',
                },
                months: [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ],
                totalCount: '{{count}} contributions in the last year',
                weekdays: [
                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                ]
            }}
        />
      </div>
    </div>
  );
}
