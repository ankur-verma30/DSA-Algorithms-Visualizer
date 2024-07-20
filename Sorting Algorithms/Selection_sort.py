import time
import random
import matplotlib.pyplot as plt

#Initialize array
number=[]
#the size of the array 
size=200

#the gap to be maintained in the graph
gap=5

#function to swap two numbers
def swap(x,y):
    return y,x

#function to sort the array using selection sort
def selection_sort(array):
    for i in range(size-1):

        #find the minimum element in the unsorted array
        min_index = i
        for j in range(i+1, size):
            if number[j]<number[min_index]:
                min_index = j

        #swap the minimum element with the first element
        number[min_index],number[i]=swap(number[min_index],number[i])

        #function to show transition in swapping 
        plt.bar([i for i in range(len(number))],number)
        plt.show(block=False)
        plt.pause(0.2)
        plt.clf()

#Driver program
def main():
    #initialize the array
    for i in range(1,size+1):
        number.append(random.randint(1,100))

    #find the seed and shuffle the array to make it more random
    random.seed(time.time())
    random.shuffle(number)

    #initial plot of numbers in graph
    #the vector position as x-axis and its corresponding value will be the height in the line
    plt.bar([i for i in range(len(number))],number)
    plt.show(block=False)
    plt.pause(0.5)
    plt.clf()

    #call the sorting function
    selection_sort(number)

    #show the sorted array
    for i in range(size):
        print(number[i],end=" ")
    print()

    #wait for sometime
    time.sleep(5)

if __name__ == "__main__":
    main()                