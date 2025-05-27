const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "amit@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "new": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active_task": true,
        "new_task": true,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Design Homepage",
        "task_description": "Create a responsive design for the homepage.",
        "task_date": "2023-10-15",
        "task_category": "Design"
      },
      {
        "active_task": false,
        "new_task": true,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Fix Login Bug",
        "task_description": "Resolve the issue with the login functionality.",
        "task_date": "2023-10-20",
        "task_category": "Development"
      },
      {
        "active_task": true,
        "new_task": false,
        "completed_task": true,
        "failed_task": false,
        "task_title": "Write API Documentation",
        "task_description": "Document the new API endpoints.",
        "task_date": "2023-10-10",
        "task_category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "priya@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active_task": true,
        "new_task": false,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Optimize Database",
        "task_description": "Improve database query performance.",
        "task_date": "2023-10-18",
        "task_category": "Database"
      },
      {
        "active_task": false,
        "new_task": true,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Test Payment Gateway",
        "task_description": "Ensure the payment gateway integration works correctly.",
        "task_date": "2023-10-22",
        "task_category": "Testing"
      },
      {
        "active_task": true,
        "new_task": false,
        "completed_task": true,
        "failed_task": false,
        "task_title": "Update User Manual",
        "task_description": "Add new features to the user manual.",
        "task_date": "2023-10-12",
        "task_category": "Documentation"
      },
      {
        "active_task": false,
        "new_task": false,
        "completed_task": false,
        "failed_task": true,
        "task_title": "Deploy to Production",
        "task_description": "Deploy the latest version to the production server.",
        "task_date": "2023-10-05",
        "task_category": "DevOps"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Sneha",
    "email": "sneha@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active_task": true,
        "new_task": false,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Create Marketing Campaign",
        "task_description": "Plan and execute a new marketing campaign.",
        "task_date": "2023-10-25",
        "task_category": "Marketing"
      },
      {
        "active_task": false,
        "new_task": true,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Analyze Sales Data",
        "task_description": "Analyze sales data for Q3 2023.",
        "task_date": "2023-10-30",
        "task_category": "Analytics"
      },
      {
        "active_task": true,
        "new_task": false,
        "completed_task": true,
        "failed_task": false,
        "task_title": "Prepare Quarterly Report",
        "task_description": "Compile and prepare the quarterly financial report.",
        "task_date": "2023-10-08",
        "task_category": "Finance"
      },
      {
        "active_task": false,
        "new_task": false,
        "completed_task": false,
        "failed_task": true,
        "task_title": "Organize Team Event",
        "task_description": "Plan and organize a team-building event.",
        "task_date": "2023-10-02",
        "task_category": "HR"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Raj",
    "email": "raj@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active_task": true,
        "new_task": false,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Develop New Feature",
        "task_description": "Implement a new feature for the product.",
        "task_date": "2023-10-17",
        "task_category": "Development"
      },
      {
        "active_task": false,
        "new_task": true,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Review Code",
        "task_description": "Review and approve pull requests.",
        "task_date": "2023-10-19",
        "task_category": "Code Review"
      },
      {
        "active_task": true,
        "new_task": false,
        "completed_task": true,
        "failed_task": false,
        "task_title": "Fix UI Bugs",
        "task_description": "Resolve UI-related bugs reported by users.",
        "task_date": "2023-10-09",
        "task_category": "UI/UX"
      },
      {
        "active_task": false,
        "new_task": false,
        "completed_task": false,
        "failed_task": true,
        "task_title": "Update Server",
        "task_description": "Update the server to the latest version.",
        "task_date": "2023-10-03",
        "task_category": "DevOps"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Kiran",
    "email": "kiran@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active_task": true,
        "new_task": false,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Create Social Media Content",
        "task_description": "Design and schedule social media posts.",
        "task_date": "2023-10-23",
        "task_category": "Marketing"
      },
      {
        "active_task": false,
        "new_task": true,
        "completed_task": false,
        "failed_task": false,
        "task_title": "Monitor Website Traffic",
        "task_description": "Analyze website traffic using Google Analytics.",
        "task_date": "2023-10-28",
        "task_category": "Analytics"
      },
      {
        "active_task": true,
        "new_task": false,
        "completed_task": true,
        "failed_task": false,
        "task_title": "Prepare Budget Proposal",
        "task_description": "Create a budget proposal for the next quarter.",
        "task_date": "2023-10-11",
        "task_category": "Finance"
      },
      {
        "active_task": false,
        "new_task": false,
        "completed_task": false,
        "failed_task": true,
        "task_title": "Hire New Developer",
        "task_description": "Conduct interviews and hire a new developer.",
        "task_date": "2023-10-04",
        "task_category": "HR"
      }
    ]
  }
];

const admins = [
  {
    "id": 101,
    "firstname": "Syed_Admin",
    "email": "admin.syed@example.com",
    "password": "123",
  },
  {
    "id": 102,
    "firstname": "Yusuf_Admin",
    "email": "admin.yusuf@example.com",
    "password": "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admins", JSON.stringify(admins));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admins"));

  // console.log(employees, admins);
  return {employees, admins}
};
