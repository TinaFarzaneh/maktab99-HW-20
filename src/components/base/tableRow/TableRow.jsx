export const TableRow = ({ lap, lapTime }) => {
  const rowClass = lap % 2 === 0 ? "bg-[#3E3E3E]" : "bg-[#187CA7]";
  return (
    <tr className={rowClass}>
      <td>{lap}</td>
      <td>{lapTime}</td>
    </tr>
  );
};
