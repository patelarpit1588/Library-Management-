import {
  BookOpen,
  BookCheck,
  BookCopy,
  Tags,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  ArrowRight,
  Library,
  CalendarDays,
  ClipboardList,
  RefreshCw,
  Activity,
  Send,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  // No sample data. Connect your backend to populate these values.
  const stats = [
    {
      title: "Total Books",
      value: null,
      description: "Books in the library",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600",
      path: "/admin/books",
    },
    {
      title: "Borrowed Books",
      value: null,
      description: "Currently issued books",
      icon: BookCheck,
      color: "bg-orange-50 text-orange-600",
      path: "/admin/issued-books",
    },
    {
      title: "Available Books",
      value: null,
      description: "Books available to borrow",
      icon: BookCopy,
      color: "bg-green-50 text-green-600",
      path: "/admin/books",
    },
    {
      title: "Total Categories",
      value: null,
      description: "Book categories",
      icon: Tags,
      color: "bg-purple-50 text-purple-600",
      path: "/admin/categories",
    },
    {
      title: "Total Users",
      value: null,
      description: "Registered library users",
      icon: Users,
      color: "bg-indigo-50 text-indigo-600",
      path: "/admin/users",
    },
    {
      title: "Pending Requests",
      value: null,
      description: "Awaiting approval",
      icon: Clock,
      color: "bg-yellow-50 text-yellow-700",
      path: "/admin/issue-requests",
    },
    {
      title: "Approved Requests",
      value: null,
      description: "Approved requests",
      icon: CheckCircle,
      color: "bg-teal-50 text-teal-600",
      path: "/admin/issue-requests",
    },
    {
      title: "Overdue Books",
      value: null,
      description: "Past their due date",
      icon: AlertCircle,
      color: "bg-red-50 text-red-600",
      path: "/admin/issued-books",
    },
  ];

  const quickActions = [
    {
      title: "Add New Book",
      description: "Add a book to your collection.",
      icon: Plus,
      path: "/admin/addbook",
      color: "bg-green-600",
    },
    {
      title: "Manage Books",
      description: "View, update, or remove books.",
      icon: Library,
      path: "/admin/books",
      color: "bg-blue-600",
    },
    {
      title: "Issue Requests",
      description: "Review book borrowing requests.",
      icon: ClipboardList,
      path: "/admin/issue-requests",
      color: "bg-purple-600",
    },
    {
      title: "Manage Queries",
      description: "Read and reply to user queries.",
      icon: MessageSquare,
      path: "/admin/queries",
      color: "bg-orange-600",
    },
  ];

  const overviewItems = [
    {
      title: "Book Issue Requests",
      description: "Requests submitted by users",
      icon: BookCheck,
      path: "/admin/issue-requests",
    },
    {
      title: "User Queries",
      description: "Questions submitted by users",
      icon: MessageSquare,
      path: "/admin/queries",
    },
    {
      title: "Library Users",
      description: "View registered users",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Book Categories",
      description: "Organize your collection",
      icon: Tags,
      path: "/admin/categories",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-green-700">
              <LayoutDashboard size={17} />
              <span>Library Management System</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Manage your library, books, users, and borrowing requests.
            </p>
          </div>

          <button
            onClick={() => handleNavigate("/admin/addbook")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <Plus size={19} />
            Add New Book
          </button>
        </section>

        {/* Statistics */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Library Statistics
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                An overview of your library records.
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-gray-500 shadow-sm sm:flex">
              <Activity size={15} className="text-green-600" />
              Dashboard overview
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                    >
                      <Icon size={23} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-green-600"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-medium text-gray-500">
                      {item.title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-gray-900">
                      {item.value ?? "—"}
                    </h3>

                    <p className="mt-2 text-xs text-gray-400">
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
            <h2 className="text-lg font-bold text-gray-800">
              Quick Actions
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Quickly access frequently used features.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.title}
                  type="button"
                  onClick={() => handleNavigate(action.path)}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition hover:border-green-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${action.color}`}
                  >
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-800 transition group-hover:text-green-700">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {action.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-green-600"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* Overview and Calendar */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Management Overview */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Management Overview
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Access the main areas of your library.
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-3 text-green-700">
                <Library size={22} />
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {overviewItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleNavigate(item.path)}
                    className="group flex w-full items-center gap-4 py-4 text-left first:pt-0 last:pb-0 focus:outline-none"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition group-hover:bg-green-50 group-hover:text-green-700">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-700">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-green-600"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dashboard Information */}
          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-green-50 p-3 text-green-700">
                <CalendarDays size={22} />
              </div>

              <div>
                <h2 className="font-bold text-gray-800">
                  Dashboard Information
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  System overview
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50 px-5 py-10 text-center">
              <div className="mb-4 rounded-full bg-white p-4 text-gray-400 shadow-sm">
                <RefreshCw size={27} />
              </div>

              <h3 className="font-semibold text-gray-700">
                Ready to manage your library
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                Connect your backend to display live statistics and library activity here.
              </p>

              <button
                type="button"
                onClick={() => handleNavigate("/admin/books")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                Explore Books
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 p-6 text-white shadow-sm sm:p-8">
          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-green-100">
                <BookOpen size={20} />
                <span className="text-sm font-medium">
                  Library Administration
                </span>
              </div>

              <h2 className="text-xl font-bold sm:text-2xl">
                Keep your library organized
              </h2>

              <p className="mt-2 text-sm leading-6 text-green-50">
                Manage your book collection, monitor borrowing requests, and help users get the most out of your library.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleNavigate("/admin/books")}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50 sm:self-center"
            >
              View All Books
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border-[30px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 right-36 h-48 w-48 rounded-full border-[24px] border-white/10" />
        </section>

      </div>
    </div>
  );
}

export default AdminDashboard;
