import type { AvailabilityInput } from "./availability";

export interface AvailabilitySubmissionAdapter {
  submit(input: AvailabilityInput): Promise<{ reference: string }>;
}

class LocalMockSubmissionAdapter implements AvailabilitySubmissionAdapter {
  async submit(_input: AvailabilityInput) {
    void _input;
    await new Promise((resolve) => setTimeout(resolve, 650));
    return { reference: `LOCAL-${Date.now()}` };
  }
}

export const availabilitySubmissionAdapter: AvailabilitySubmissionAdapter =
  new LocalMockSubmissionAdapter();
