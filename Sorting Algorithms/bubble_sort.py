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
def bubble_sort(array):
    temp,i,j=0,0,0
    
    for i in range(1,size): 
        for j in range( size-i):
            if number[j]>number[j+1]:
                number[j],number[j+1]=swap(number[j],number[j+1])
                
        #function to show transition in swapping 
        plt.bar([i for i in range(len(number))],number)
        plt.show(block=False)
        plt.pause(0.2)
        plt.clf()

#Driver program
def main():
    #initialize the array
    for i in range(1,size+1):
        number.append(random.randint(1,300))

    #initial plot of numbers in graph
    #the vector position as x-axis and its corresponding value will be the height in the line
    plt.bar([i for i in range(len(number))],number)
    plt.show(block=False)
    plt.pause(0.5)
    plt.clf()

    #call the sorting function
    bubble_sort(number)

    #show the sorted array
    for i in range(size):
        print(number[i],end=" ")
    print()

    #wait for sometime
    time.sleep(5)

if __name__ == "__main__":
    main()                