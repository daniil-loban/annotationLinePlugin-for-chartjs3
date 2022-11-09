# Plugin purpose:

Draws notches on chart bars

## Demo:

![alt text](https://github.com/daniil-loban/annotationLinePlugin-for-chartjs3/blob/main/assets/img/demo.png?raw=true)


## Using:
```
const config = {
      ...


      lines: [2, 4, 8, 10, 8, 4, 2]
        .map((x, i) => ({
          datasetIndex: 0,
          dataIndex: i,
          yCoordinate: x,
          color: "salmon",
          width: 3
        })),

      ...  
}
```
