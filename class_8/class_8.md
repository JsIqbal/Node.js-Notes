# Understanding Computer Architecture and Processes

1. **Executable Files:** Executable files are always in binary form.

2. **Binary Form Execution:** Binary form executable files are saved line by line. Each line can have a 64-bit or 32-bit value assigned to it.

3. **Memory Allocation in RAM:**
   - RAM's initial portion is occupied by system processes or system program processes.
   - RAM's memory cells can be either 32-bit or 64-bit.

4. **Execution of Executable Files:**
   - When an executable file is run, it gets assigned line by line to random access memory (RAM).

5. **Processor Structure:**
   - The processor consists of the processing unit and the register set.

6. **Processor Operations:**
   - The processor performs basic operations like add, sub, mul, div, and, or, not.

7. **Register Set:**
   - The register set includes registers like ax, bx, cx, px, etc.
   - The pointing register points to a specific memory cell address.

8. **Execution Process:**
   - When an executable file runs, the first line is held in RAM.
   - The pointing register points to that memory cell's address.
   - The processing unit executes the value inside the pointing register address.

9. **Processes and Threads:**
   - A process is created when the pointing register points to a memory cell's address and the processing unit starts executing line by line.
   - Processes are separated from each other and marked by the end point for the pointing register.

10. **Context Switching:**
    - Context switching involves switching the pointing register from one process to another.
    - Processes are like virtual computers, and context switching allows the processor to execute multiple processes.

11. **Processor Cores and Threads:**
    - Each core has two logical processors.
    - Context switching allows a single core to run more than one process concurrently.

12. **Concurrency and Parallel Programming:**
    - Concurrency involves running multiple processes simultaneously.
    - Parallel programming involves running multiple processes in parallel, using multiple processors or cores.

13. **Threads in Programming:**
    - Threads are also known as virtual processors.
    - Threads allow for fast context switching and concurrent execution of tasks.

14. **JavaScript Threading:**
    - JavaScript is a single-threaded language but achieves concurrency through mechanisms like callbacks, promises, and async/await.

15. **Computer Performance:**
    - Higher-generation processors and cores provide better performance.
    - The number of logical processors and generations impact the speed and efficiency of a computer.

16. **Conclusion:**
    - Understanding computer architecture, processes, and threading is essential for optimizing performance and developing efficient software.
