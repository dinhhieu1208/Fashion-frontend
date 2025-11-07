export const PermissionList = (props) => {
  const {title, arrayList, arrayCurrent} = props;
  return (

    <>
      <div>
        <label className="block mb-2 font-bold text-[20px]">{title}</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto border rounded-md p-3">
          {arrayList.map((perm) => (
            <label key={perm.key} className="flex items-center text-[16px]">
              <input
                type="checkbox"
                name="permission"
                value={perm.key}
                className="mr-2"
                defaultChecked = {arrayCurrent.includes(perm.key) ? true : false}
              />
              {perm.value}
            </label>
          ))}
        </div>
      </div>
    </>
  )
}