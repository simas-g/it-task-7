import { Link } from "react-router";
import styles from "./TableView.module.css";

export default function TableView({ columns, data, onRowClick }) {
  return (
    <div
      className={`${styles.tableContainer} shadow-sm rounded-4 overflow-hidden`}
    >
      <table className={`${styles.customTable} w-100 mb-0`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-uppercase text-secondary fw-semibold small"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row._id}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.type === "Link" ? (
                      <Link
                        to={`presentation/${row?.id}`}
                        className={styles.link}
                      >
                        {row[col.displayKey] || row[col.key]} Edit
                      </Link>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-muted"
              >
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
