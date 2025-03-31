"use client";

import { db } from "@/config/firebaseConfig";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { Copy, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const summaries = [
  {
    date: "7 February, 2025",
    summary:
      "Launched a brand-new website with improved UI/UX. Users reported faster load times and better navigation.",
  },
  {
    date: "12 February, 2025",
    summary:
      "Crossed the 10,000 active users mark. Growth attributed to recent marketing campaigns and product improvements.",
  },
  {
    date: "18 February, 2025",
    summary:
      "Integrated AI-powered customer support. The chatbot now handles 70% of queries, reducing response time.",
  },
  {
    date: "22 February, 2025",
    summary:
      "Successfully hosted our annual tech conference. Over 5,000 attendees joined for insightful sessions and networking.",
  },
  {
    date: "27 February, 2025",
    summary:
      "Released version 2.0 of our mobile app. Major updates include dark mode, improved performance, and bug fixes.",
  },
  {
    date: "2 March, 2025",
    summary:
      "Announced a partnership with a major industry leader. This collaboration will enhance innovation and market reach.",
  },
];

const HistoryPage = () => {
  const router = useRouter();
  const { isAuth, userEmail } = useGetUserInfo();

  const getHistory = async () => {
    const q = query(
      collection(db, "Summaries"),
      where("userEmail", "==", userEmail)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    if (isAuth) {
      getHistory();
    }
  }, [isAuth]);

  if (!isAuth) {
    router.push("/");
    return;
  }

  return (
    <div className="px-4 md:px-12 py-5 max-w-5xl mx-auto">
      <h2 className="font-semibold text-2xl mb-8">Recent Summaries</h2>

      <div className="flex flex-col space-y-5">
        {summaries.map((summary, index) => (
          <div key={index} className="shadow-md p-5 rounded-lg">
            <Link href={"/summary/123"}>
              <div>
                <div className="flex justify-between mb-4 text-gray-500 text-sm">
                  <p>{summary.date}</p>

                  <div className="flex items-center space-x-4">
                    <Copy className="w-5 h-5" />
                    <Trash className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p>{summary.summary}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
