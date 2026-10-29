import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Search,
  Eye,
  X,
  Clock,
  CheckCircle,
  Inbox,
  ArrowRight,
  CalendarDays,
  Mail,
  UserRound,
  Reply,
} from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";

function MyQueries()  {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuery, setSelectedQuery] = useState(null);

  const userEmail = useSelector((state) => state.auth.userData?.email)
  
  const [queries,setQueries] = useState([])

 useEffect(() => {
  if (!userEmail) return;

  axios
    .post("http://localhost:3000/api/query/getuserquery", {
      email: userEmail,
    })
    .then((res) => {
      setQueries(res.data);
    })
    .catch((err) => {
      console.error("Error fetching user queries:", err);
    });
}, [userEmail]);

  const statusStyles = {
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    replied: "bg-green-50 text-green-700 border-green-200",
  };

  const filteredQueries = queries.filter((query) => {
    const search = searchTerm.toLowerCase();

    return (
      query.subject?.toLowerCase().includes(search) ||
      query.message?.toLowerCase().includes(search) ||
      query.status?.toLowerCase().includes(search)
    );
  });

  const getCount = (status) =>
    queries.filter(
      (query) => query.status?.toLowerCase() === status
    ).length;

  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return date;

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f9f6] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wider text-green-700">
              <MessageSquare size={18} />
              SUPPORT CENTER
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              My Queries
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Track your submitted queries, check their status,
              and view replies from the library administrator.
            </p>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 sm:self-center"
          >
            <MessageSquare size={19} />
            Submit New Query
          </button>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <SummaryCard
            title="Total Queries"
            count={queries.length}
            icon={<Inbox size={23} />}
            iconStyle="bg-green-50 text-green-700"
          />

          <SummaryCard
            title="Pending"
            count={getCount("pending")}
            icon={<Clock size={23} />}
            iconStyle="bg-amber-50 text-amber-700"
          />

          <SummaryCard
            title="Replied"
            count={getCount("replied")}
            icon={<CheckCircle size={23} />}
            iconStyle="bg-emerald-50 text-emerald-700"
          />
        </div>

        {/* Query Listing */}
        <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          {/* Table Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:p-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Your Submitted Queries
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View your messages and administrator responses.
              </p>
            </div>

            <div className="relative w-full sm:max-w-xs">
              <Search
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search queries..."
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-50"
              />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[850px] text-left">
              <thead className="bg-[#edf6ef] text-sm text-slate-700">
                <tr>
                  <th className="px-6 py-4 font-semibold">Subject</th>
                  <th className="px-6 py-4 font-semibold">Submitted On</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Admin Reply</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredQueries.map((query) => (
                  <tr
                    key={query._id}
                    className="transition hover:bg-green-50/40"
                  >
                    <td className="max-w-xs px-6 py-5">
                      <p className="font-semibold text-slate-800">
                        {query.subject}
                      </p>

                      <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-500">
                        {query.message}
                      </p>
                    </td>

                    <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-600">
                      {formatDate(query.createdAt)}
                    </td>

                    <td className="px-6 py-5">
                      <StatusBadge
                        status={query.status}
                        styles={statusStyles}
                      />
                    </td>

                    <td className="max-w-xs px-6 py-5">
                      {query.reply?.trim() ? (
                        <p className="line-clamp-2 text-sm leading-5 text-gray-600">
                          {query.reply}
                        </p>
                      ) : (
                        <span className="text-sm text-gray-400">
                          Awaiting reply
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => setSelectedQuery(query)}
                        className="inline-flex items-center gap-2 rounded-lg border border-green-200 px-3 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                      >
                        <Eye size={17} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Query Cards */}
          <div className="space-y-4 p-4 md:hidden">
            {filteredQueries.map((query) => (
              <article
                key={query._id}
                className="rounded-xl border border-gray-100 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-bold text-slate-900">
                    {query.subject}
                  </h3>

                  <StatusBadge
                    status={query.status}
                    styles={statusStyles}
                  />
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {query.message}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <CalendarDays size={15} />
                  {formatDate(query.createdAt)}
                </div>

                <div className="mt-4 rounded-xl bg-gray-50 p-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-500">
                    Administrator's Reply
                  </p>

                  <p className="text-sm leading-6 text-gray-600">
                    {query.reply?.trim() ||
                      "Awaiting reply from the administrator."}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedQuery(query)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-green-200 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50"
                >
                  <Eye size={17} />
                  View Details
                </button>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredQueries.length === 0 && (
            <div className="px-5 py-16 text-center sm:py-20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-700">
                {searchTerm ? (
                  <Search size={34} strokeWidth={1.7} />
                ) : (
                  <Inbox size={36} strokeWidth={1.7} />
                )}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {searchTerm ? "No queries found" : "No queries yet"}
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                {searchTerm
                  ? "Try searching with a different subject, message, or status."
                  : "You haven't submitted any queries yet. Contact the library if you need assistance."}
              </p>

              {!searchTerm && (
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  Submit Your First Query
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          )}

          {/* Table Footer */}
          <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-500 sm:px-6">
            Showing {filteredQueries.length} of {queries.length} queries
          </div>
        </section>
      </div>

      {/* Query Details Modal */}
      {selectedQuery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          onClick={() => setSelectedQuery(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="query-modal-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-5 sm:p-6">
              <div>
                <h2
                  id="query-modal-title"
                  className="text-xl font-bold text-slate-900"
                >
                  Query Details
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your query and the administrator's response.
                </p>
              </div>

              <button
                onClick={() => setSelectedQuery(null)}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 p-5 sm:p-6">
              {/* Subject and Status */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Subject
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {selectedQuery.subject}
                  </h3>
                </div>

                <StatusBadge
                  status={selectedQuery.status}
                  styles={statusStyles}
                />
              </div>

              {/* User Details */}
              <div className="grid gap-4 rounded-xl bg-gray-50 p-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <UserRound size={19} className="mt-0.5 text-green-700" />

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-500">
                      Name
                    </p>

                    <p className="mt-1 break-words text-sm font-medium text-slate-800">
                      {selectedQuery.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={19} className="mt-0.5 text-green-700" />

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-500">
                      Email
                    </p>

                    <p className="mt-1 break-words text-sm font-medium text-slate-800">
                      {selectedQuery.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Submitted On
                </p>

                <p className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays size={17} />
                  {formatDate(selectedQuery.createdAt)}
                </p>
              </div>

              {/* Message */}
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Your Message
                </p>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <p className="whitespace-pre-wrap break-words text-sm leading-7 text-gray-600">
                    {selectedQuery.message}
                  </p>
                </div>
              </div>

              {/* Admin Reply */}
              <div>
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Administrator's Reply
                </p>

                <div
                  className={`rounded-xl border p-5 ${
                    selectedQuery.status?.toLowerCase() === "replied"
                      ? "border-green-100 bg-green-50/70"
                      : "border-amber-100 bg-amber-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-700 shadow-sm">
                      <Reply size={20} />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        Library Administrator
                      </p>

                      <p className="text-xs text-gray-500">
                        {selectedQuery.status?.toLowerCase() === "replied"
                          ? "Response to your query"
                          : "Response pending"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-gray-700">
                    {selectedQuery.reply?.trim() ||
                      "Your query is awaiting a response from the administrator. Please check again later."}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-gray-100 p-5">
              <button
                onClick={() => setSelectedQuery(null)}
                className="rounded-xl bg-green-700 px-6 py-2.5 font-semibold text-white transition hover:bg-green-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* Summary Card */
const SummaryCard = ({ title, count, icon, iconStyle }) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <p className="mt-2 text-2xl font-bold text-slate-900">{count}</p>
      </div>

      <div className={`rounded-xl p-3 ${iconStyle}`}>{icon}</div>
    </div>
  </div>
);

/* Status Badge */
const StatusBadge = ({ status, styles }) => {
  const normalizedStatus = status?.toLowerCase();

  const label =
    normalizedStatus === "replied"
      ? "Replied"
      : normalizedStatus === "pending"
        ? "Pending"
        : status || "Pending";

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${
        styles[normalizedStatus] ||
        "border-gray-200 bg-gray-50 text-gray-600"
      }`}
    >
      {label}
    </span>
  );
};

export default MyQueries;

