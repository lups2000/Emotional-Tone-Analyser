import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiClient {
    private baseURL: string = process.env.BACKEND_URL || 'http://localhost:5001';

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.request<T>({
        baseURL: this.baseURL,
        ...config,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return await this.request<T>({ url, method: 'POST', data, ...config });
  }

  // Add GET, PUT and DELETE methods here (in case of future need)
}