import { capitalizeText, getFormattedDate } from "@/utils";
import { openSans } from "@/utils/fonts";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface Props {
  data: any[];
  isLoading?: boolean;
  perPage?: number;
}

const DocumentTable = ({ data, isLoading, perPage }: Props) => {
  // columns
  const columns: ColumnsType<any> = [
    {
      title: <span className="text-violet-500">No</span>,
      className: openSans.className,
      render: (value, record, index) => index + 1,
    },

    {
      title: <span className="text-violet-500">Description</span>,
      dataIndex: "exporterName",
      key: "exporterName",
      className: openSans.className,
      render: (value, record, index) => capitalizeText(value),
    },

    {
      title: <span className="text-violet-500">Cyboks Status</span>,
      dataIndex: "isApproved",
      key: "isApproved",
      className: openSans.className,
      render: (value, record, index) => {
        switch (value) {
          case "approved":
            return (
              <span className="text-violet-500 font-semibold">Approved</span>
            );

          case "pending":
            return (
              <span className="text-yellow-500 font-semibold">Pending</span>
            );

          case "rejected":
            return <span className="text-red-500 font-semibold">Rejected</span>;

          default:
            return null;
        }
      },
    },

    {
      title: <span className="text-violet-500">NCSA Status</span>,
      dataIndex: "isApproved",
      key: "isApproved",
      className: openSans.className,
      render: (value, record, index) => {
        switch (value) {
          case "approved":
            return (
              <span className="text-violet-500 font-semibold">Approved</span>
            );

          case "pending":
            return (
              <span className="text-yellow-500 font-semibold">Pending</span>
            );

          case "rejected":
            return <span className="text-red-500 font-semibold">Rejected</span>;

          default:
            return null;
        }
      },
    },

    {
      title: <span className="text-violet-500">Expiry Date</span>,
      dataIndex: "createdAt",
      key: "createdAt",
      className: openSans.className,
      render: (value, record, index) => (
        <span className="text-violet-500 font-semibold">
          {/* {getFormattedDate(value)} */}
          24/05/2023
        </span>
      ),
    },
  ];

  return (
    <div className="overflow-auto shadow-md">
      <Table
        dataSource={data}
        columns={columns}
        className={`${openSans.className} text-gray-900 whitespace-nowrap`}
        pagination={{ pageSize: perPage || 10, position: ["bottomCenter"] }}
        loading={isLoading}
      />
    </div>
  );
};

export default DocumentTable;
