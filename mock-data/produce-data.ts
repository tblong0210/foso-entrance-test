interface IProduceStatus {
  id: number
  name: string
  color?: string
  bgColor?: string
}

const produceStatusesData: IProduceStatus[] = [
  {
    id: 1,
    name: "Chưa sản xuất",
    color: "#C25705",
    bgColor: "rgba(255, 129, 26, 0.15)",
  },
  {
    id: 2,
    name: "Đang sản xuất",
    color: "#076A94",
    bgColor: "rgba(7, 106, 148, 0.15)",
  },
  {
    id: 3,
    name: "Hoàn thành",
    color: "#1A7526",
    bgColor: "rgba(53, 189, 75, 0.2)",
  },
]

interface IProduceCode {
  id: number
  statusId: number
  code: string
  deadline: string
  progressInStock: number
  progressInProcess: number
}

const listProduceCodeData: IProduceCode[] = [
  {
    id: 1,
    statusId: 1,
    code: "LSX-13032514",
    deadline: "13/03/2025",
    progressInStock: 0.5,
    progressInProcess: 0.9,
  },
  {
    id: 2,
    statusId: 2,
    code: "LSX-13032515",
    deadline: "13/03/2025",
    progressInStock: 0.4,
    progressInProcess: 0.6,
  },
  {
    id: 3,
    statusId: 3,
    code: "LSX-13032516",
    deadline: "13/03/2025",
    progressInStock: 0.9,
    progressInProcess: 0.1,
  },
  {
    id: 4,
    statusId: 1,
    code: "LSX-13032517",
    deadline: "13/03/2025",
    progressInStock: 0.2,
    progressInProcess: 0.3,
  },
  {
    id: 5,
    statusId: 2,
    code: "LSX-13032518",
    deadline: "13/03/2025",
    progressInStock: 0.6,
    progressInProcess: 0.7,
  },
  {
    id: 6,
    statusId: 3,
    code: "LSX-13032519",
    deadline: "13/03/2025",
    progressInStock: 0.8,
    progressInProcess: 0.4,
  },
  {
    id: 7,
    statusId: 1,
    code: "LSX-13032520",
    deadline: "13/03/2025",
    progressInStock: 0.3,
    progressInProcess: 0.2,
  },
  {
    id: 8,
    statusId: 2,
    code: "LSX-13032521",
    deadline: "13/03/2025",
    progressInStock: 0.7,
    progressInProcess: 0.8,
  },
  {
    id: 9,
    statusId: 3,
    code: "LSX-13032522",
    deadline: "13/03/2025",
    progressInStock: 0.1,
    progressInProcess: 0.5,
  },
  {
    id: 10,
    statusId: 1,
    code: "LSX-13032523",
    deadline: "13/03/2025",
    progressInStock: 0.4,
    progressInProcess: 0.6,
  },
]

export {
  produceStatusesData,
  listProduceCodeData,
  IProduceStatus,
  IProduceCode,
}
