[ Kubernetes や Amazon ECS などの Docker ランタイム上でコンテナの Graceful Shutdown のために送信されるシグナルの種類は何か書きなさい。]

SIGHTERM

> タスクが停止すると、各コンテナのエントリプロセス (通常は PID 1) に SIGTERM シグナルを送信します。タイムアウトが経過すると、今度は SIGKILL シグナルをプロセスに送信します。デフォルトでは、SIGTERM シグナルの送
> 信後 30 秒のタイムアウトで SIGKILL シグナルを送信します。この値は、ECS タスクのパラメータの stopTimeout を更新することによってタスクのコンテナ単位で調整するか、ECS エージェントの環境変数 
> ECS_CONTAINER_STOP_TIMEOUT を設定して EC2 コンテナインスタンス単位で調整できます。この最初の SIGTERM シグナルを適切に処理して、正常にコンテナのプロセスを終了させる必要があります。SIGTERM シグナルを処理す
> ることを意識しておらずタイムアウトまでに終了しなかったプロセスは、SIGKILL シグナルが送信され、コンテナが強制的に停止されます。

https://aws.amazon.com/jp/blogs/news/graceful-shutdowns-with-ecs/