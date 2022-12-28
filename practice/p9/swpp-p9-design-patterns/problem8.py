class MatrixInfo:
    def __init__(self, matrix):
        self._shape = [len(matrix), len(matrix[0])]
        self._value = matrix
    
    @property
    def shape(self):
        return self._shape.copy()

    @shape.setter
    def shape(self, _):
        raise ValueError("cannot modify shape directly")


if __name__ == "__main__":
    # 3 x 4 matrix
    sample_matrix = [[i for i in range(4)] for _ in range(3)]

    container = MatrixInfo(sample_matrix)
    print(container.shape) # [3, 4]
    container.shape[0] = 0
    print(container.shape) # [0, 4], do not want this behavior
    container.shape = [0,4]