
import {
  BookOpen,
  BookCheck,
  BookCopy,
  Tags,
  Users,
  Clock,
  Plus,
  ArrowRight,
  Library,
  ClipboardList,
  MessageSquare,
  LayoutDashboard,
  TrendingUp,
  CheckCircle,
  Activity,
  CalendarDays,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminDashboard() {
  const navigate = useNavigate();

  // No sample data. Connect your APIs when you want live statistics.
  const stats = [
    {
      title: "Total Books",
      value: null,
      description: "Books in your collection",
      icon: BookOpen,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      path: "/books",
    },
    {
      title: "Borrowed Books",
      value: null,
      description: "Currently issued books",
      icon: BookCheck,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      path: "/issuebook",
    },
    {
      title: "Available Books",
      value: null,
      description: "Books available to borrow",
      icon: BookCopy,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      path: "/books",
    },
    {
      title: "Total Categories",
      value: null,
      description: "Categories in your collection",
      icon: Tags,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      path: "/books",
    },
    {
      title: "Total Users",
      value: null,
      description: "Registered library users",
      icon: Users,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      path: "/users",
    },
    {
      title: "Pending Requests",
      value: null,
      description: "Awaiting approval",
      icon: Clock,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-700",
      path: "/issuebook",
    },
  ];

  const quickActions = [
    {
      title: "Add New Book",
      description: "Add books to your collection",
      icon: Plus,
      iconBg: "bg-blue-600",
      path: "/addbook",
    },
    {
      title: "Manage Books",
      description: "View and manage your books",
      icon: Library,
      iconBg: "bg-indigo-600",
      path: "/books",
    },
    {
      title: "Issue Requests",
      description: "Manage borrowing requests",
      icon: ClipboardList,
      iconBg: "bg-purple-600",
      path: "/issuebook",
    },
    {
      title: "Manage Queries",
      description: "View and reply to queries",
      icon: MessageSquare,
      iconBg: "bg-teal-600",
      path: "/queries",
    },
  ];

  const managementItems = [
    {
      title: "Book Management",
      description: "Add, edit, view, and delete books",
      icon: BookOpen,
      path: "/books",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "User Management",
      description: "View registered library users",
      icon: Users,
      path: "/users",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "Issue Book Requests",
      description: "Approve, reject, and manage returns",
      icon: BookCheck,
      path: "/issuebook",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "User Queries",
      description: "Review and reply to user messages",
      icon: MessageSquare,
      path: "/queries",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Existing Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-w-0 flex-1">

        {/* Existing Topbar */}
        <Topbar />

        <main className="space-y-8 p-4 sm:p-6 lg:p-8">

          {/* Dashboard Header */}
          <section className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-600">
                <LayoutDashboard size={18} />
                <span>Library Management System</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                Dashboard
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                Welcome to your library administration panel. Manage books,
                users, issue requests, and user queries from one place.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/addbook")}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Plus size={20} />
              Add New Book
            </button>

          </section>

          {/* Statistics */}
          <section>

            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Library Overview
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  A summary of your library records.
                </p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-gray-500 shadow-sm">
                <Activity size={16} className="text-blue-600" />
                <span>Statistics overview</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => navigate(item.path)}
                    className="group rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:p-6"
                  >

                    <div className="flex items-start justify-between">

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                      >
                        <Icon size={24} />
                      </div>

                      <div className="rounded-lg p-2 text-gray-300 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                        <ArrowRight size={19} />
                      </div>

                    </div>

                    <div className="mt-5">

                      <p className="text-sm font-medium text-gray-500">
                        {item.title}
                      </p>

                      <h3 className="mt-2 text-3xl font-bold text-gray-800">
                        {item.value ?? "—"}
                      </h3>

                      <p className="mt-2 text-sm text-gray-400">
                        {item.description}
                      </p>

                    </div>

                  </button>
                );
              })}

            </div>
          </section>

          {/* Quick Actions */}
          <section>

            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-800">
                Quick Actions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Quickly access the most frequently used features.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.title}
                    type="button"
                    onClick={() => navigate(action.path)}
                    className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm transition group-hover:scale-105 ${action.iconBg}`}
                    >
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-800 transition group-hover:text-blue-600">
                        {action.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {action.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />

                  </button>
                );
              })}

            </div>
          </section>

          {/* Management Overview and Information */}
{/* Management Overview */}
<section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

  {/* Management Overview */}
  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">

    <div className="mb-6 flex items-center justify-between gap-3">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Management Overview
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Navigate to different management sections.
        </p>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 p-3 text-blue-700">
        <Library size={23} />
      </div>
    </div>

    <div className="divide-y divide-gray-100">
      {managementItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.title}
            type="button"
            onClick={() => navigate(item.path)}
            className="group flex w-full items-center gap-4 py-4 text-left transition first:pt-0 last:pb-0 focus:outline-none"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color} transition group-hover:scale-105`}
            >
              <Icon size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-800 transition group-hover:text-blue-600">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-5 text-gray-500">
                {item.description}
              </p>
            </div>

            <ArrowRight
              size={19}
              className="shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
            />
          </button>
        );
      })}
    </div>

  </div>

</section>

        </main>

      </div>
    </div>
  );
}

export default AdminDashboard;

