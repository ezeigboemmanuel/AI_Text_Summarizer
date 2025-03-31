"use client";

import { db } from "@/config/firebaseConfig";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { Copy, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Data {
  id: string;
  summary: string;
  userEmail: string;
  userText: string;
}

const HistoryPage = () => {
  const router = useRouter();
  const { isAuth, userEmail } = useGetUserInfo();
  const [summaries, setSummaries] = useState<Data[]>([
    {
      id: "",
      summary: "",
      userEmail: "",
      userText: "",
    },
  ]);

  const getHistory = async () => {
    const q = query(
      collection(db, "Summaries"),
      where("userEmail", "==", userEmail)
    );

    let summariesArray: any[] = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      summariesArray.push(doc.data());
    });

    setSummaries(summariesArray);
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
                  <p>
                    {new Date(Number(summary.id)).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <div className="flex items-center space-x-4">
                    <Copy className="w-5 h-5" />
                    <Trash className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="line-clamp-3">{summary.summary}</p>
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
